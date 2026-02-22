<script lang="ts" generics="TData, TValue">
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		type ColumnDef,
		type ColumnFiltersState,
		getCoreRowModel,
		getFilteredRowModel,
		getPaginationRowModel,
		getSortedRowModel,
		type PaginationState,
		type SortingState
	} from '@tanstack/table-core';
	import { createSvelteTable, FlexRender } from '$lib/components/ui/data-table/index.js';
	import * as Empty from '$lib/components/ui/empty/index.js';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import Panda from '@lucide/svelte/icons/panda';
	import RotateCcw from '@lucide/svelte/icons/rotate-ccw';
	import Search from '@lucide/svelte/icons/search';
	import * as Table from '$lib/components/ui/table/index.js';
	import X from '@lucide/svelte/icons/x';

	type DataTableProps<TData, TValue> = {
		columns: ColumnDef<TData, TValue>[];
		data: TData[];
	};

	let { columns, data }: DataTableProps<TData, TValue> = $props();

	let pagination = $state<PaginationState>({
		pageIndex: 0,
		pageSize: 20
	});
	let sorting = $state<SortingState>([]);
	let columnFilters = $state<ColumnFiltersState>([]);

	const table = createSvelteTable({
		get data() {
			return data;
		},
		// svelte-ignore state_referenced_locally
		columns,
		getFilteredRowModel: getFilteredRowModel(),
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: (updater) => {
			if (typeof updater === 'function') {
				columnFilters = updater(columnFilters);
			} else {
				columnFilters = updater;
			}
		},
		onPaginationChange: (updater) => {
			if (typeof updater === 'function') {
				pagination = updater(pagination);
			} else {
				pagination = updater;
			}
		},
		onSortingChange: (updater) => {
			if (typeof updater === 'function') {
				sorting = updater(sorting);
			} else {
				sorting = updater;
			}
		},
		state: {
			get columnFilters() {
				return columnFilters;
			},
			get pagination() {
				return pagination;
			},
			get sorting() {
				return sorting;
			}
		}
	});
</script>

<div class="grid gap-2 p-4 md:gap-4">
	<InputGroup.Root class="w-full max-w-xs">
		<InputGroup.Input
			onchange={(e) => {
				table.getColumn('item')?.setFilterValue(e.currentTarget.value);
			}}
			oninput={(e) => {
				table.getColumn('item')?.setFilterValue(e.currentTarget.value);
			}}
			placeholder="Search items..."
			value={(table.getColumn('item')?.getFilterValue() as string) ?? ''}
		/>
		<InputGroup.Addon align="inline-start">
			<Search />
		</InputGroup.Addon>
		{#if (table.getColumn('item')?.getFilterValue() as string) ?? '' !== ''}
			<InputGroup.Addon align="inline-end">
				<InputGroup.Button
					onclick={() => {
						table.getColumn('item')?.setFilterValue('');
					}}
					size="icon-xs"
				>
					<X />
				</InputGroup.Button>
			</InputGroup.Addon>
		{/if}
	</InputGroup.Root>
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row>
						{#each headerGroup.headers as header (header.id)}
							<Table.Head colspan={header.colSpan}>
								{#if !header.isPlaceholder}
									<FlexRender
										content={header.column.columnDef.header}
										context={header.getContext()}
									/>
								{/if}
							</Table.Head>
						{/each}
					</Table.Row>
				{/each}
			</Table.Header>
			<Table.Body>
				{#each table.getRowModel().rows as row (row.id)}
					<Table.Row>
						{#each row.getAllCells() as cell}
							<Table.Cell>
								<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
							</Table.Cell>
						{/each}
					</Table.Row>
				{:else}
					<Table.Row>
						<Table.Cell colspan={columns.length}>
							<Empty.Root>
								<Empty.Header>
									<Empty.Media variant="icon">
										<Panda />
									</Empty.Media>
									<Empty.Title>No items found</Empty.Title>
									<Empty.Description>Try relaxing your filters</Empty.Description>
								</Empty.Header>
								<Empty.Content>
									<Button
										onclick={() => {
											table.getColumn('item')?.setFilterValue('');
										}}
									>
										<RotateCcw />
										Reset Filters
									</Button>
								</Empty.Content>
							</Empty.Root>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<Pagination.Root
		page={table.getState().pagination.pageIndex + 1}
		count={table.getRowCount()}
		perPage={table.getState().pagination.pageSize}
		class="grid gap-2 md:gap-4"
	>
		{#snippet children({ currentPage, pages, range })}
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.PrevButton />
				</Pagination.Item>
				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<Pagination.Item>
							<Pagination.Ellipsis />
						</Pagination.Item>
					{:else}
						<Pagination.Item>
							<Pagination.Link
								isActive={currentPage === page.value}
								onclick={() => table.setPageIndex(page.value - 1)}
								{page}
							>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}
				<Pagination.Item>
					<Pagination.NextButton />
				</Pagination.Item>
			</Pagination.Content>
			<span class="mx-auto text-sm text-muted-foreground">
				Showing {range.start} to {range.end} of {table.getRowCount()}
				{table.getRowCount() === 1 ? 'row' : 'rows'}
			</span>
		{/snippet}
	</Pagination.Root>
</div>
