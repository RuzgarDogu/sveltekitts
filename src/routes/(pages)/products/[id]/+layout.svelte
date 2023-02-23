<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const relatedProducts = data.products.slice(-5);
</script>

<div class="flex flex-wrap p-2">
	<div class="w-full lg:w-3/5 p-2">
		<div class="bg-white rounded-lg">
			<slot />
		</div>
	</div>
	<div class="w-full lg:w-2/5 p-2">
		<div class="divide-y divide-slate-100">
			<ul class="divide-y divide-slate-100 bg-white p-4  rounded-lg">
				{#each relatedProducts as product}
					<li>
						<a data-sveltekit-preload-data href="/products/{product.id}">
							<article class="flex items-start space-x-4 p-2">
								<img
									src={product.images[0]}
									class="flex-none rounded-md bg-slate-100 h-16 w-16"
									alt="productimage"
								/>
								<div class="min-w-0 relative flex-auto">
									<h2 class="font-semibold text-slate-900 truncate pr-20">
										{product.title}
									</h2>
									<dl class="flex flex-wrap text-sm leading-6 font-medium">
										<div
											class="absolute top-0 right-0 flex items-center space-x-1"
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
										<div class="text-xs text-slate-400">
											<dt class="sr-only">Year</dt>
											<dd>{product.category}</dd>
										</div>
									</dl>
								</div>
							</article>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- <div class="bg-slate-500 rounded-lg p-4">

            <h1 class="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white capitalize">Related</h1>
            <ul>
                {#each relatedProducts as product}
                <li><a class="text-white" href="/products/{product.id}">{product.title}</a></li>
                {/each}
            </ul>
        </div> -->
	</div>
</div>
