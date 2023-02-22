<script type="ts">
	export let title: string;
</script>

<div class="w-full flex-none flex items-center p-4 sm:p-6 lg:p-4 xl:p-6">
	<dt
		class="w-2/5 sm:w-1/4 flex-none text-slate-900 font-medium dark:text-slate-300 transition-opacity duration-[1.5s] delay-500 opacity-25"
	>
		{title}
	</dt>
	<dd class="transition-opacity duration-[1.5s] delay-500 opacity-75">
		<slot />
	</dd>
</div>
