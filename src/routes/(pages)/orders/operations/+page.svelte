<script lang="ts">
	import { goto } from '$app/navigation';
	import { PageHeader } from '@components';
	import { Button, Checkbox, Dropdown, DropdownItem, Modal, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
    console.log(data);
    let orderDetails = false,
		selectedOrder = null;

        const paymentTypes = ['Kredi Kartı', 'Banka Transferi', 'Paypal', 'Bitcoin'];
	
	const openOrderDetails = (order) => {
		console.log(order);
		selectedOrder = order;
		orderDetails = true;
	};
</script>


<PageHeader title="Kargo Takip">
	<form action="#" method="GET" class="hidden lg:block lg:pl-3.5">
		<label for="topbar-search" class="sr-only">Search</label>
		<div class="relative lg:w-96">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<svg
					class="w-5 h-5 text-gray-500 dark:text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/></svg
				>
			</div>
			<input
				type="text"
				name="email"
				id="topbar-search"
				class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
				placeholder="Arama yapın"
			/>
		</div>
	</form>
	<button
		on:click={() => (filterModal = true)}
		class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
	>
		<svg
			fill="currentColor"
			height="15"
			width="15"
			class="mr-2"
			aria-hidden="true"
			viewBox="0 0 300.906 300.906"
			xml:space="preserve"
		>
			<path
				d="M288.953,0h-277c-5.522,0-10,4.478-10,10v49.531c0,5.522,4.478,10,10,10h12.372l91.378,107.397v113.978 c0,3.688,2.03,7.076,5.281,8.816c1.479,0.792,3.101,1.184,4.718,1.184c1.94,0,3.875-0.564,5.548-1.68l49.5-33 c2.782-1.854,4.453-4.977,4.453-8.32v-80.978l91.378-107.397h12.372c5.522,0,10-4.478,10-10V10C298.953,4.478,294.476,0,288.953,0 z M167.587,166.77c-1.539,1.809-2.384,4.105-2.384,6.48v79.305l-29.5,19.666V173.25c0-2.375-0.845-4.672-2.384-6.48L50.585,69.531 h199.736L167.587,166.77z M278.953,49.531h-257V20h257V49.531z"
			/>
		</svg>
		Filtrele
	</button>
</PageHeader>

<div class="flex flex-col px-8 py-2">
	<Table hoverable={true}>
		<TableHead>
			<TableHeadCell>#</TableHeadCell>
			<TableHeadCell>Taşıyıcı</TableHeadCell>
			<TableHeadCell>Tipi</TableHeadCell>
			<TableHeadCell>Alıcı</TableHeadCell>
			<TableHeadCell>Awb #</TableHeadCell>
			<TableHeadCell>Awb Tarihi</TableHeadCell>
			<TableHeadCell>Müşteri Kg</TableHeadCell>
			<TableHeadCell>Hacim Kg</TableHeadCell>
			<TableHeadCell>Ülke</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			{#each data.cargo_orders as order}
				<TableBodyRow class="cursor-pointer">
					<TableBodyCell>
						<button
							id="dropdownMenuIconButton"
							data-dropdown-toggle="dropdownDots"
							class="islemler-menu-{order.id} inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							type="button"
						>
							<svg
								class="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
								/></svg
							>
						</button>
						<Dropdown triggeredBy=".islemler-menu-{order.id}">
							<DropdownItem on:click={() => goto('/orders/operations/'+order.id)}>Detay</DropdownItem>
							<DropdownItem><a target="_blank" href="/pdf/Tnt.pdf">Etiket Oluştur</a></DropdownItem>
						</Dropdown>
					</TableBodyCell>
					<TableBodyCell>
						{order.carrier}
					</TableBodyCell>
					<TableBodyCell>
						{order.type}
					</TableBodyCell>
					<TableBodyCell>
						{order.userDetails.firstName} {order.userDetails.lastName}
					</TableBodyCell>
					<TableBodyCell>
						{order.awb}
					</TableBodyCell>
					<TableBodyCell>
						{order.awb_date}
					</TableBodyCell>
					<TableBodyCell>
						{order.weight}
					</TableBodyCell>
					<TableBodyCell>
						{order.volume_weight}
					</TableBodyCell>
					<TableBodyCell>
						{order.country}
					</TableBodyCell>

				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</div>

<!-- svelte-ignore missing-declaration -->
<Modal class="min-w-full" title="Sipariş Detayları" bind:open={orderDetails} size="lg" autoclose>
	<div class="grid grid-cols-2 space-x-6">
		<div>
			<figure
				class="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5"
			>
				<blockquote class="mt-6 text-slate-700 dark:text-slate-300">
					<p
						class="mb-3 flex justify-between text-sm text-gray-500 truncate dark:text-gray-400"
					>
						<strong>Adres:</strong><span
							>{selectedOrder.userDetails.address.address}</span
						>
					</p>
					<p
						class="mb-3 flex justify-between text-sm text-gray-500 truncate dark:text-gray-400"
					>
						<strong>Telefon:</strong><span>{selectedOrder.userDetails.phone}</span>
					</p>
					<p
						class="mb-3 flex justify-between text-sm text-gray-500 truncate dark:text-gray-400"
					>
						<strong>Ödeme:</strong><span
							>{paymentTypes[Math.floor(Math.random() * paymentTypes.length)]}</span
						>
					</p>
				</blockquote>
				<figcaption class="flex items-center space-x-4">
					<img
						src={selectedOrder.userDetails.image}
						alt=""
						class="flex-none w-14 h-14 rounded-full object-cover"
						loading="lazy"
						decoding="async"
					/>
					<div class="flex-auto">
						<div class="text-base text-slate-900 font-semibold dark:text-slate-300">
							<a
								href="https://twitter.com/ryanflorence/status/1187951799442886656"
								tabindex="0"
							>
								<span class="absolute inset-0" />{selectedOrder.userDetails
									.firstName}
								{selectedOrder.userDetails.lastName}
							</a>
						</div>
						<div class="mt-0.5">{selectedOrder.userDetails.email}</div>
					</div>
				</figcaption>
			</figure>
		</div>

		<div>
			<img class="w-36 mb-4" src={selectedOrder.market.image} alt="" />

			<ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
				{#each selectedOrder.products as product}
					<li class="pb-2 pt-2 sm:pb-2">
						<div class="flex items-center space-x-4">
							<div class="flex-1 min-w-0">
								<p
									class="text-sm font-medium text-gray-900 truncate dark:text-white"
								>
									{product.title}
								</p>
								<p class="text-sm text-gray-500 truncate dark:text-gray-400">
									{product.quantity} Adet x {product.price}₺
								</p>
							</div>
							<div
								class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
							>
								{product.total}₺
							</div>
						</div>
					</li>
				{/each}
				<li class="pb-2 pt-3 sm:pb-4">
					<div class="flex items-center space-x-4">
						<div class="flex-1 min-w-0">
							<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
								TOPLAM:
							</p>
							<p class="text-sm text-gray-500 truncate dark:text-gray-400">
								{selectedOrder.totalQuantity} adet ürün
							</p>
						</div>
						<div
							class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
						>
							{selectedOrder.total}₺
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<svelte:fragment slot="footer">
		<Button>Kapat</Button>
		<!-- <Button color="alternative">Decline</Button> -->
	</svelte:fragment>
</Modal>
<style>
	.lightolive {
    background: #e6ffe6;
}
</style>