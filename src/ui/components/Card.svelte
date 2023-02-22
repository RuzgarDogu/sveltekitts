<script lang="ts">
	export let image: URL | undefined;
</script>

<figure class="md:flex bg-white rounded-xl md:p-0 dark:bg-slate-800">
	<img
		class="w-full rounded-t-lg md:rounded-l-lg h-auto md:w-48 md:h-fill md:rounded-none mx-auto object-none"
		src={image}
		alt=""
		width="384"
		height="512"
	/>
	<div class="flex-auto p-6">
		<slot />
	</div>
</figure>
