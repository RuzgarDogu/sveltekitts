<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: console.log('layout.svelte', data);
</script>

<slot />
