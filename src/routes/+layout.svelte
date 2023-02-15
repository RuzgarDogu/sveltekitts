<script>
	import '@/app.postcss';
	import '@styles/app.scss'
	import { Navbar } from '@components';
</script>

<div class="app">
	<Navbar />
	<main>
		<slot />
	</main>
</div>