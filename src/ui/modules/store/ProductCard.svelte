<script lang="ts">
	import type { IsProduct } from '@interfaces';
	import { Badge } from 'flowbite-svelte'
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

		




		
	</div>
	<div class="min-w-0 relative flex-auto">
		<dl class="flex flex-wrap text-sm leading-6 font-medium">
			<div
				class="absolute flex items-center space-x-1"
			>
				<dt class="text-sky-500">
					<span class="sr-only">Star rating</span>
					<svg width="16" height="20" fill="currentColor">
						<path
							d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"
						/>
					</svg>
				</dt>
				<dd>{product.rating}</dd>
			</div>
		</dl>
	</div>
	<div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
		<Badge class="mt-4 p-4" rounded color="green">{product.category}</Badge>
		
	</div>
	<div class="flex space-x-4 text-sm font-medium">
		<div class="flex-auto flex space-x-4">
			<a
				data-sveltekit-preload-data
				href="/products/{product.id}"
				class="h-10 flex items-center justify-center px-6 font-semibold rounded-md bg-indigo-100 text-indigo-800"
			>
				Ürün Detayları
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
