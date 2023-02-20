<script>
	import '@/app.postcss';
	import '@styles/app.scss'
	import { Navbar, Sidebar } from '@modules';
	let collapsed = false
	
	let innerWidth = 0
    let innerHeight = 0

	$: smallDevice = (innerWidth < 768)
	$: collapsed = smallDevice
</script>

<svelte:window bind:innerWidth bind:innerHeight />



<div class="app grid-container" class:collapsed={collapsed}>
   <header class="header">
	<Navbar on:testing={() => collapsed = !collapsed}/>
   </header>
   <Sidebar {smallDevice} bind:collapsed/>
   <main class="main bg-slate-100">
		<slot />
	</main>
   <footer class="footer">
		Footer
	</footer>
 </div>


 