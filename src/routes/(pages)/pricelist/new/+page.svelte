<script lang="ts">
	import { PageHeader } from '@components';
	import { Input, Label, Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
    const { prices } = data;

    let selected;
    let currencies = [
        {value:"us", name: "USD"},
        {value:"eu", name: "EUR"},
        {value:"tr", name: "TRY"},
    ]

</script>
<form method="POST">
<PageHeader title="Yeni Fiyat Ekle">
    <a href="/pricelist" class="hover:bg-slate-400 group flex items-center rounded-md bg-slate-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">Vazgeç</a>
    <button
    type="submit"
    class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
    >
    Kaydet
</button>
</PageHeader>

<div class="px-8">

    <div class="flex space-x-4">
        <div class="w-2/3">
            <div class="p-4 bg-white">
                <div>
                    <Table divClass="w-full max-h-96 table-auto overflow-scroll w-full" hoverable={true}>
                        <TableHead>
                            <TableHeadCell>İlk</TableHeadCell>
                            <TableHeadCell>Son</TableHeadCell>
                            <TableHeadCell>Fiyat</TableHeadCell>
                            <TableHeadCell>Cwd Bedeli</TableHeadCell>
                            <TableHeadCell>Ek Ücret(2)</TableHeadCell>
                        </TableHead>
                        <TableBody divClass="divide-y max-h-96">
                            {#each prices as price, i}
                            <TableBodyRow>
                                <TableBodyCell class="!p-4">
                                    {price.first}
                                </TableBodyCell>
                                <TableBodyCell class="!p-4">
                                    {price.second}
                                </TableBodyCell>
                                <TableBodyCell class="!p-4">
                                    <Input name="price_index_{i}" value="{price.price}" type="text" placeholder="" size="sm" />
                                </TableBodyCell>
                                <TableBodyCell class="!p-4">
                                    {price.cwd}
                                </TableBodyCell>
                                <TableBodyCell class="!p-4">
                                    {price.extra}
                                </TableBodyCell>
                            </TableBodyRow>
                            {/each}
                        </TableBody>
                    </Table>
                    


                </div>
            </div>
    </div>
    <div class="w-1/3">
        <div padding="none" class="bg-gray-200">
            <div class="bg-gray-200 p-4">

                <div class="mb-4">
                    <Label for="type" class="mb-2">Tip</Label>
                    <Input name="type" value="Satış" type="text" id="type" placeholder="" required/>
                </div>
                <div class="mb-4">
                    <Label for="group" class="mb-2">Firma Grubu</Label>
                    <Input name="group" type="text" id="group" placeholder="" />
                </div>
                <div class="mb-4">
                    <Label for="cari" class="mb-2">Cari Adı</Label>
                    <Input name="cari" type="text" id="cari" placeholder="" required/>
                </div>
                <div class="mb-4">
                    <Label for="tasima" class="mb-2">Taşıma Tipi</Label>
                    <Input name="tasima" type="text" id="tasima" placeholder="" />
                </div>
                <div class="mb-4">
                    <Label for="bolge" class="mb-2">Bölge</Label>
                    <Input name="bolge" type="text" id="bolge" placeholder=""/>
                </div>
                <div class="mb-4">
                    <Label for="doviz" class="mb-2">Döviz</Label>
                    <Select class="mt-2" items={currencies} bind:value={selected} required/>
                    <input type="hidden" name="currency" value={selected}>
                </div>
            </div>
        </div>
    </div>
</div>


</div>

</form>
