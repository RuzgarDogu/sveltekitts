<script lang="ts">
    export let title: string;
</script>
<section>
	<header class="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
		<div class="flex items-center justify-between">
			<h2 class="font-semibold text-slate-900">{title}</h2>
			<div class="flex space-x-1">
                <slot />
            </div>
		</div>
	</header>
</section>