<script>
	import '@/app.postcss';
	// import '@picocss/pico'
	import '@styles/app.scss'
	import { Navbar, Sidebar } from '@modules';
	let collapsed = false
</script>




<div class="app grid-container" class:collapsed={collapsed}>
   <header class="header">
	<Navbar on:testing={() => collapsed = !collapsed}/>
   </header>
   <Sidebar bind:collapsed/>
   <main class="main bg-slate-100">
		<slot />
	</main>
   <footer class="footer">
		Footer
	</footer>
 </div>


 