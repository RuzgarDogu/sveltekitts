<script lang="ts">
	import type { PageData } from './$types';
	import { Checkbox, Toggle } from 'flowbite-svelte';
	import { PageHeader } from '@components';
	import markets from '$lib/assets/markets.json';
	export let data: PageData;
	let selected_markets = [];
</script>

<PageHeader title="Entegrasyonlar {selected_markets.length ? ' :' + selected_markets.length + ' Adet Seçili' : ''}">

</PageHeader>

<div class="grid gap-6 w-full md:grid-cols-3 p-12">
	{#each markets as market}
		<Checkbox bind:group={selected_markets} value={market.id} custom>
			<div
				class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
			>
				<img class="mb-4 max-h-7" src={market.image} alt="" />
				<div class="w-full text-lg font-semibold">{market.title}</div>
				<div class="w-full text-xs text-gray-500 mb-3">{market.description}</div>
				<div class="flex justify-between">
					<Toggle bind:group={selected_markets} value={market.id} />
					<a
						href={market.url}
						class="bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-8 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
						>Ziyaret Et</a
					>
				</div>
			</div>
		</Checkbox>
	{/each}
</div>
