<script lang="ts">
	import type { LayoutData } from './$types';
	import { Navbar, Sidebar } from '@modules';
	import { User } from '@models';

	export let data: LayoutData;

	const user = new User(data.user);

	let collapsed = false,
		innerWidth = 0,
		innerHeight = 0;

	$: smallDevice = innerWidth < 768;
	$: collapsed = smallDevice;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="app grid-container" class:collapsed>
	<header class="header">
		<Navbar {user} on:collapsing={() => (collapsed = !collapsed)} />
	</header>
	<Sidebar {smallDevice} bind:collapsed />
	<main class="main bg-slate-100">
		<slot />
	</main>
	<footer class="footer">Footer</footer>
</div>
