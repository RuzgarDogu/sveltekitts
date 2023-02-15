<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    const goBack = (defaultRoute = '/home') => {
        const ref = document.referrer;
        goto(ref.length > 0 ? ref : defaultRoute)
    }
</script>

<header>
	<div class="corner">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<button on:click={() =>goBack()}>
			Back
		</button>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
	</nav>
</header>
