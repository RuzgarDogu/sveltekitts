<script lang="ts">
	import type { PageData, FormData } from './$types';

	export let data: PageData;
	export let form: FormData;
</script>


	<form action="?/login" method="POST">
		<div class="mb-6 mt-6">
			<label for="email" class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
				>E-Postanız</label
			>
			<input
				value={form?.body?.data.email || 'dcyznz@qsecw.lj'}
				name="email"
				type="email"
				id="email"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="dcyznz@qsecw.lj"
				required
			/>
		</div>
		<div class="mb-6">
			<label
				for="password"
				class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
				>Parolanız</label
			>
			<input
				value={form?.body?.data.password || ''}
				name="password"
				type="password"
				id="password"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
			/>
		</div>
		<div class="flex items-start mb-6">
			<div class="flex items-center h-5">
				<input
					id="remember"
					type="checkbox"
					value=""
					class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
				/>
			</div>
			<label for="remember" class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-300"
				>Beni hatırla</label
			>
		</div>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Giriş</button
		>
	</form>
	
     



