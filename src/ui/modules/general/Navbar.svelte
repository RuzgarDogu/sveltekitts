<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
	import ProfileImage from "@images/userimage.jpg"

	const goBack = (defaultRoute = '/home') => {
        const ref = document.referrer;
        goto(ref.length > 0 ? ref : defaultRoute)
    }
</script>

  
  <Navbar let:hidden let:toggle>
	  <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
	<NavBrand href="/">
	  <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Test App</span>
	</NavBrand>
	<div class="flex items-center md:order-2">
	  <Avatar id="avatar-menu" src={ProfileImage} />
	</div>
	<Dropdown placement="bottom" triggeredBy="#avatar-menu">
	  <DropdownHeader>
	  <span class="block text-sm"> Bonnie Green </span>
	  <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
	  </DropdownHeader>
	  <DropdownItem>Dashboard</DropdownItem>
	  <DropdownItem>Settings</DropdownItem>
	  <DropdownItem>Earnings</DropdownItem>
	  <DropdownDivider />
	  <DropdownItem>Sign out</DropdownItem>
	</Dropdown>
	<NavUl {hidden}>
	  <NavLi href="/" active={$page.url.pathname === '/'}>Home</NavLi>
	  <NavLi href="/about" active={$page.url.pathname === '/about'}>About</NavLi>
	  <NavLi href="/products" active={$page.url.pathname === '/products'}>Products</NavLi>
	</NavUl>
  </Navbar>

