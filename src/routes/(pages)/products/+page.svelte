<script lang="ts">
	import type { IsProduct } from '@interfaces';
	import { ProductCard } from '@modules';
	import type { PageData } from './$types';
	import { Modal } from 'flowbite-svelte';

	export let data: PageData;
	$: ({ products, categories } = data);
	let categoryFilter: number[] = [1];
	let filterModal = false;
	const filterByCategory = (dt: IsProduct[], f: (number | undefined)[]): IsProduct[] => {
		return dt.filter((d) => f.includes(d.category));
	};
</script>

<section>
	<header class="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
		<div class="flex items-center justify-between">
			<h2 class="font-semibold text-slate-900">Products</h2>
			<div class="flex space-x-1">
				<form action="#" method="GET" class="hidden lg:block lg:pl-3.5">
					<label for="topbar-search" class="sr-only">Search</label>
					<div class="relative lg:w-96">
						<div
							class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
						>
							<svg
								class="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd"
								/></svg
							>
						</div>
						<input
							type="text"
							name="email"
							id="topbar-search"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Search"
						/>
					</div>
				</form>
				<button
					on:click={() => (filterModal = true)}
					class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
				>
					<svg
						fill="currentColor"
						height="15"
						width="15"
						class="mr-2"
						aria-hidden="true"
						viewBox="0 0 300.906 300.906"
						xml:space="preserve"
					>
						<path
							d="M288.953,0h-277c-5.522,0-10,4.478-10,10v49.531c0,5.522,4.478,10,10,10h12.372l91.378,107.397v113.978 c0,3.688,2.03,7.076,5.281,8.816c1.479,0.792,3.101,1.184,4.718,1.184c1.94,0,3.875-0.564,5.548-1.68l49.5-33 c2.782-1.854,4.453-4.977,4.453-8.32v-80.978l91.378-107.397h12.372c5.522,0,10-4.478,10-10V10C298.953,4.478,294.476,0,288.953,0 z M167.587,166.77c-1.539,1.809-2.384,4.105-2.384,6.48v79.305l-29.5,19.666V173.25c0-2.375-0.845-4.672-2.384-6.48L50.585,69.531 h199.736L167.587,166.77z M278.953,49.531h-257V20h257V49.531z"
						/>
					</svg>
					Filter
				</button>
				<a
					href="/products/new"
					class="hover:bg-blue-400 group flex items-center rounded-md bg-slate-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
				>
					<svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
						<path
							d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
						/>
					</svg>
					New
				</a>
			</div>
		</div>
	</header>
</section>

<div class="grid grid grid-cols-1 lg:grid-cols-2">
	{#each filterByCategory(products, categoryFilter) as product}
		<div class="p-4">
			<ProductCard {product} />
		</div>
	{/each}
</div>

<Modal title="Filter Categories" bind:open={filterModal} autoclose>
	<div class="grid grid-cols-2">
		{#each categories as category}
			<label>
				<input
					type="checkbox"
					bind:group={categoryFilter}
					name="category"
					value={category.id}
				/>
				{category.name}
			</label>
		{/each}
	</div>
</Modal>
