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
					<div class="flex">
						<a
						href={market.url}
						class="mr-2 bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-8 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
						>Ziyaret Et</a
					>

					<a class="flex items-center bg-blue-400 p-0 px-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 text-sm s-IVztjhbeuSHt" href="">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6 s-IVztjhbeuSHt"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" class="s-IVztjhbeuSHt"></path></svg> </a>
					

					</div>
				</div>
			</div>
		</Checkbox>
	{/each}
</div>
