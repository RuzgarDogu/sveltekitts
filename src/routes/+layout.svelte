<script>
	import '@/app.postcss';
	// import '@picocss/pico'
	import '@styles/app.scss'
	import { Navbar } from '@modules';
</script>

<div class="app">
	<Navbar />
	<main class="container">
		<slot />
	</main>
</div>