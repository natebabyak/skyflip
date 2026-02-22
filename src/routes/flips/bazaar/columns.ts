import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import DataTableCopyCell from '$lib/components/data-table-copy-cell.svelte';
import { renderComponent, renderSnippet } from '$lib/components/ui/data-table/index.js';

export type Column = {
	item: string;
	buyPrice: number;
	sellPrice: number;
	profit: number;
	flipsPerHour: number;
	profitPerHour: number;
};

export const columns: ColumnDef<Column>[] = [
	{
		accessorKey: 'item',
		header: 'Item',
		cell: ({ row }) => {
			const item = row.getValue<string>('item');

			return renderComponent(DataTableCopyCell, {
				cellText: item,
				copyText: `/bz ${item}`
			});
		}
	},
	{
		accessorKey: 'buyPrice',
		header: () => {
			return renderSnippet(
				createRawSnippet(() => {
					return {
						render: () => '<div class="text-end">Buy Price</div>'
					};
				})
			);
		},
		cell: ({ row }) => {
			return renderSnippet(
				createRawSnippet(() => {
					return {
						render: () =>
							`<div class="text-end">${row.original.buyPrice.toLocaleString('en-US')}</div>`
					};
				})
			);
		}
	},
	{
		accessorKey: 'sellPrice',
		header: () => {
			return renderSnippet(
				createRawSnippet(() => {
					return {
						render: () => '<div class="text-end">Sell Price</div>'
					};
				})
			);
		},
		cell: ({ row }) => {
			return renderSnippet(
				createRawSnippet(() => {
					return {
						render: () =>
							`<div class="text-end">${row.original.sellPrice.toLocaleString('en-US')}</div>`
					};
				})
			);
		}
	},
	{
		accessorKey: 'profit',
		header: () => {
			return renderSnippet(
				createRawSnippet(() => {
					return {
						render: () => '<div class="text-end">Profit/Flip</div>'
					};
				})
			);
		},
		cell: ({ row }) => {
			return renderSnippet(
				createRawSnippet(() => {
					return {
						render: () =>
							`<div class="text-end">${row.original.profit.toLocaleString('en-US')}</div>`
					};
				})
			);
		}
	},
	{
		accessorKey: 'flipsPerHour',
		header: () => {
			return renderSnippet(
				createRawSnippet(() => {
					return {
						render: () => '<div class="text-end">Flips/h</div>'
					};
				})
			);
		},
		cell: ({ row }) => {
			return renderSnippet(
				createRawSnippet(() => {
					return {
						render: () =>
							`<div class="text-end">${row.original.flipsPerHour.toLocaleString('en-US')}</div>`
					};
				})
			);
		}
	},
	{
		accessorKey: 'profitPerHour',
		header: () => {
			return renderSnippet(
				createRawSnippet(() => {
					return {
						render: () => '<div class="text-end">Profit/h</div>'
					};
				})
			);
		},
		cell: ({ row }) => {
			return renderSnippet(
				createRawSnippet(() => {
					return {
						render: () =>
							`<div class="text-end">${row.original.profitPerHour.toLocaleString('en-US')}</div>`
					};
				})
			);
		}
	}
];
