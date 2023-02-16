<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    const goBack = (defaultRoute = '/home') => {
        const ref = document.referrer;
        goto(ref.length > 0 ? ref : defaultRoute)
    }
</script>

<header>
	<nav>
		<ul>
			<li><strong>Test</strong></li>
			</ul>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/products') ? 'page' : undefined}>
				<a href="/products">Products</a>
			</li>
			<li>
				<button on:click={() =>goBack()}>Back</button>
			</li>
		</ul>
	</nav>
</header>
