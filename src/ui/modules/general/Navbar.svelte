<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
	import ProfileImage from "@images/userimage.jpg"
	import { createEventDispatcher } from 'svelte';
	import { DarkMode } from 'flowbite-svelte';
	 const dispatch = createEventDispatcher();

	const goBack = (defaultRoute = '/home') => {
        const ref = document.referrer;
        goto(ref.length > 0 ? ref : defaultRoute)
    }

	const testing = () => {
		dispatch("testing")
	}

</script>
<!--

	<nav class="p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
		<div class="container flex flex-wrap items-center justify-between mx-auto">
			
			
			
			<button on:click={testing} type="button" aria-label="Open main menu">
				<span class="sr-only">Open main menu</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="h-6 w-6 shrink-0" aria-label="bars 3" fill="none" viewBox="0 0 24 24" stroke-width="2">
					<path d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
				</svg>
			</button>
			
			
			
			
			
			<div class="flex">
				
				
				
				
				<div class="flex items-center ml-3">
					<div>
						<button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
							<span class="sr-only">Open user menu</span>
							<img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
						</button>
					</div>
		<div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-2">
			<div class="px-4 py-3" role="none">
				<p class="text-sm text-gray-900 dark:text-white" role="none">
					Neil Sims
				</p>
				<p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
					neil.sims@flowbite.com
				</p>
			</div>
			<ul class="py-1" role="none">
				<li>
					<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
				</li>
			</ul>
		</div>
	</div>
	
	
</div>

</div>
</nav>

-->

<Navbar class="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 px-2 w-full">
	<button on:click={testing} type="button" aria-label="Open main menu">
		<span class="sr-only">Open main menu</span>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="h-6 w-6 shrink-0" aria-label="bars 3" fill="none" viewBox="0 0 24 24" stroke-width="2">
			<path d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
		</svg>
	</button>
	<div class="flex items-center md:order-2">


		<DarkMode class="text-lg">
			<svelte:fragment slot="lightIcon">
			  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"/></svg>
			</svelte:fragment>
			<svelte:fragment slot="darkIcon">
			  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"/></svg>
			</svelte:fragment>
		  </DarkMode>


		  <button aria-label="Notifications" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 text-lg">
			<span>
				<svg class="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"><g id="SVGRepo_iconCarrier"><path opacity="0.15" d="M12 3C8.68629 3 6 5.68629 6 9C6 13 4 17 4 17H20C20 17 18 13 18 9C18 5.68629 15.3137 3 12 3Z" fill="#000000"></path><path d="M9 17V18C9 18.394 9.0776 18.7841 9.22836 19.1481C9.37913 19.512 9.6001 19.8427 9.87868 20.1213C10.1573 20.3999 10.488 20.6209 10.8519 20.7716C11.2159 20.9224 11.606 21 12 21C12.394 21 12.7841 20.9224 13.1481 20.7716C13.512 20.6209 13.8427 20.3999 14.1213 20.1213C14.3999 19.8427 14.6209 19.512 14.7716 19.1481C14.9224 18.7841 15 18.394 15 18V17M18 9C18 12 20 17 20 17H4C4 17 6 13 6 9C6 5.732 8.732 3 12 3C15.268 3 18 5.732 18 9Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>	 
		</span>
	</button>




		
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
  </Navbar>

