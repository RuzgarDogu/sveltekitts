<script lang="ts">
	export let collapsed: Boolean;
	export let smallDevice: Boolean;

	let sidebar: HTMLElement;
	let links: HTMLElement[];

	$: collapsed, toggleCollapse();

	const toggleCollapse = () => {
		if (!sidebar) return;
		let titles = sidebar.querySelectorAll('li > a > *:not(svg)');
		if (collapsed) {
			sidebar.classList.add('hidden');
			sidebar.classList.add('md:w-16');
			sidebar.classList.remove('md:w-64');
			titles.forEach((el) => {
				el.classList.add('hidden');
			});
		} else {
			sidebar.classList.remove('hidden');
			sidebar.classList.remove('md:w-16');
			sidebar.classList.add('md:w-64');
			titles.forEach((el) => {
				el.classList.remove('hidden');
			});
		}
		if (smallDevice) {
			links = sidebar.querySelectorAll('li > a');
			links.forEach((link) => {
				link.addEventListener('click', () => {
					collapsed = true;
				});
			});
		}
	};
</script>

<aside
	class="w-full md:w-64 hidden md:block sidenav shadow-sm bg-white"
	aria-label="Sidebar"
	bind:this={sidebar}
>
	<ul class="p-4">
		<li class="flex justify-between">
			<a class="flex" href="">
				<svg
					class="w-6 h-6 mr-2"
					viewBox="0 0 256 256"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="xMidYMid"
					fill="#000000"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0" />
					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<defs>
							<filter
								x="-50%"
								y="-50%"
								width="200%"
								height="200%"
								filterUnits="objectBoundingBox"
								id="a"
							>
								<feOffset dy="16" in="SourceAlpha" result="shadowOffsetOuter1" />
								<feGaussianBlur
									stdDeviation="9"
									in="shadowOffsetOuter1"
									result="shadowBlurOuter1"
								/>
								<feColorMatrix
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.214965466 0"
									in="shadowBlurOuter1"
									result="shadowMatrixOuter1"
								/>
								<feMerge>
									<feMergeNode in="shadowMatrixOuter1" />
									<feMergeNode in="SourceGraphic" />
								</feMerge>
							</filter>
						</defs>
						<path
							d="M127.979 155.387L256 27.93v-7.323C256 9.227 246.773 0 235.392 0H20.608C9.227 0 0 9.227 0 20.608v150.304l71.067-70.656 56.912 55.13"
							fill="#FF9C0B"
						/>
						<path
							d="M71.088 157.83L0 228.767v6.624C0 246.773 9.227 256 20.608 256h214.784c11.381 0 20.608-9.227 20.608-20.608V86.597L127.979 214.053 71.088 157.83"
							fill="#FB5722"
						/>
						<path
							d="M0 170.912l71.067-70.656 56.912 55.13L256 27.932l-.021 58.682-128 127.44-56.891-56.224L0 228.768v-57.856"
							fill="#F2F2F2"
							filter="url(#a)"
						/>
						<path
							d="M99.552 185.968l.005-58.117-28.469 29.978 28.464 28.139"
							fill="#FF9B07"
						/>
					</g>
				</svg>
				<span class="truncate">Sveltekit Dashboard</span>
			</a>
			<button
				class="flex md:hidden"
				on:click={() => (collapsed = true)}
				type="button"
				aria-label="Open main menu"
			>
				<span class="sr-only">Open main menu</span>
				<span class="text-lg">x</span>
			</button>
		</li>
	</ul>

	<div class="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
		<ul class="space-y-1">
			<li>
				<a
					href="/dashboard"
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
						/>
					</svg>
					<span class="sidebar-title ml-3">Panel</span>
				</a>
			</li>
			<li>
				<a
					href="/products"
					data-sveltekit-preload-data
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
						/>
					</svg>
					<span class="sidebar-title flex-1 ml-3 whitespace-nowrap">??r??nler</span>
				</a>
			</li>
			<li>
				<a	data-sveltekit-preload-data
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
					href="orders"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
						/>
					</svg>
					<span class="flex-1 ml-3 whitespace-nowrap">Sipari??ler</span>
					<span
						class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
						>3</span
					>
				</a>
			</li>
			<li>
				<a
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
					href=""
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
						/>
					</svg>
					<span class="sidebar-title ml-3">Kullan??c??lar</span>
				</a>
			</li>
			<li>
				<a
					href="/login"
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
						/>
					</svg>
					<span class="sidebar-title ml-3">Sign In</span>
				</a>
			</li>
			<li>
				<a
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
					href=""
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
						/>
					</svg>
					<span class="sidebar-title ml-3">Ayarlar</span>
				</a>
			</li>
		</ul>
		<ul class="space-y-1 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
			<li>
				<a
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
					href=""
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
						/>
					</svg>
					<span class="sidebar-title ml-3">Upgrade to Pro</span>
				</a>
			</li>
			<li>
				<a
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
					href="/about"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
						/>
					</svg>
					<span class="sidebar-title ml-3">Hakk??nda</span>
				</a>
			</li>
			<li>
				<a
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
					href=""
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
						/>
					</svg>
					<span class="sidebar-title ml-3">Geli??tirici</span>
				</a>
			</li>
			<li>
				<a
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
					href=""
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
						/>
					</svg>
					<span class="sidebar-title ml-3">Yard??m</span>
				</a>
			</li>
		</ul>
	</div>
</aside>

<style>
	aside {
		transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
</style>
