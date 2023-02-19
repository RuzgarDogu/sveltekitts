<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
	import ProfileImage from "@images/userimage.jpg"
	import { createEventDispatcher } from 'svelte';

	 const dispatch = createEventDispatcher();

	const goBack = (defaultRoute = '/home') => {
        const ref = document.referrer;
        goto(ref.length > 0 ? ref : defaultRoute)
    }

	const testing = () => {
		dispatch("testing")
	}

</script>
 
<button on:click={testing} type="button" aria-label="Open main menu">
	<span class="sr-only">Open main menu</span>
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="h-6 w-6 shrink-0" aria-label="bars 3" fill="none" viewBox="0 0 24 24" stroke-width="2">
		<path d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
	</svg>
</button>


  <!-- <Navbar>
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
  </Navbar> -->

