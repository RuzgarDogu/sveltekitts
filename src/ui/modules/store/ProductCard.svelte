<script lang="ts">
	import type { IsProduct } from '@interfaces';
	import { Card } from '@components';
	export let product: IsProduct;
</script>

<Card image={product.images[0]}>
	<div class="flex flex-wrap">
		<h1 class="flex-auto text-lg font-semibold text-slate-900 capitalize">
			{product.title}
		</h1>
		<div class="text-lg font-semibold text-slate-500">
			${product.price}
		</div>
		<div
			class="w-full flex-none text-sm font-medium text-slate-700 mt-2 text-sky-500 dark:text-sky-400"
		>
			{product.isActive ? 'In Stock' : 'Not Available'}
		</div>
	</div>
	<div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
		<div class="space-x-2 flex text-sm">
			<label>
				<input
					class="sr-only peer"
					name="size-{product.id}"
					type="radio"
					value="xs"
					checked
				/>
				<div
					class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white"
				>
					XS
				</div>
			</label>
			<label>
				<input class="sr-only peer" name="size-{product.id}" type="radio" value="s" />
				<div
					class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white"
				>
					S
				</div>
			</label>
			<label>
				<input class="sr-only peer" name="size-{product.id}" type="radio" value="m" />
				<div
					class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white"
				>
					M
				</div>
			</label>
		</div>
	</div>
	<div class="flex space-x-4 text-sm font-medium">
		<div class="flex-auto flex space-x-4">
			<a
				data-sveltekit-preload-data
				href="/products/{product.id}"
				class="h-10 flex items-center justify-center px-6 font-semibold rounded-md bg-indigo-100 text-indigo-800"
			>
				Product Details
			</a>
		</div>
		<button
			on:click={(e) => product.addWishlist(e)}
			class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
			type="button"
			aria-label="Like"
		>
			<svg width="20" height="20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
				/>
			</svg>
		</button>
		<button
			on:click={(e) => product.edit()}
			class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
			type="button"
			aria-label="Like"
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0" />
				<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
				<g id="SVGRepo_iconCarrier">
					<path
						d="M12.2424 20H17.5758M4.48485 16.5L15.8242 5.25607C16.5395 4.54674 17.6798 4.5061 18.4438 5.16268V5.16268C19.2877 5.8879 19.3462 7.17421 18.5716 7.97301L7.39394 19.5L4 20L4.48485 16.5Z"
						stroke="#464455"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
			</svg>
		</button>
	</div>
</Card>
