<script lang="ts">
	import type { PageData } from './$types';
	import { Card } from 'flowbite-svelte';
	import { PageHeader } from '@components';
	import { Bar } from 'svelte-chartjs';
	import {
		Chart,
		Title,
		Tooltip,
		Legend,
		BarElement,
		CategoryScale,
		LinearScale
	} from 'chart.js';
	import Sil1 from './sil1.svelte';
	import Sil2 from './sil2.svelte';
	import Sil3 from './sil3.svelte';
	Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
	export let data: PageData;

	let { chartdata, orders } = data;
	console.log(data);
</script>

<PageHeader title="Genel Bakış" />
<Sil2 />

<div class="flex px-8 pb-8 gap-x-8">
	<div class="w-7/12 bg-white rounded-xl p-8">
		<div class="w-full">
			<Bar data={chartdata} options={{ responsive: true }} />
		</div>
	</div>
	<div class="w-5/12 bg-white rounded-xl p-8">
		<div class="w-full">
			<h4 class="mb-4">Son Siparişler</h4>
			<ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
				{#each orders.products as product}
					<li class="pb-2 pt-2 sm:pb-4">
						<div class="flex items-center space-x-4">
							<div class="flex-shrink-0">
								<svg
									class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/></svg
								>
							</div>
							<div class="flex-1 min-w-0">
								<p
									class="text-sm font-medium text-gray-900 truncate dark:text-white"
								>
									{product.title}
								</p>
								<p class="text-sm text-gray-500 truncate dark:text-gray-400">
									{product.quantity} adet
								</p>
							</div>
							<div
								class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
							>
								{(product.price * 18).toLocaleString('tr-TR', {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2
								})}₺
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<div class="flex px-8 pb-8 gap-x-8">
	<div class="w-1/2 bg-white rounded-xl p-4">
		<Sil1 />
	</div>
	<div class="w-1/2 rounded-xl p-0" style="background-color: #334155;">
		<Sil3 />
	</div>
</div>
