<script lang="ts">
    import type { PageData } from './$types';
    import { PageHeader } from '@components';
	import { Checkbox, Input, Label, Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

    export let data: PageData;
    const {order} = data;
    console.log("--*-0", order);
   // generate random string either 'EUR' or 'USD
    const randomCurrency = () => {
        const currencies = ['EUR', 'USD'];
        return currencies[Math.floor(Math.random() * currencies.length)];
    }

    const randomFsc = () => {
        return Number((Math.random() * 12).toFixed(2));
    }

    const tabledata = [
        {
            carrier: "Fedex Express Tur",
            grup: "Areks",
            cur: randomCurrency(),
            fsc: 15,
            bedel: randomFsc(),
            carriage: Number((20 + Math.random()).toFixed(2)),
            cvd: 0.5,        
            bolge: Math.floor(Math.random() * 2) + 1
        },
        {
            carrier: "TNT International",
            grup: "Areks",
            cur: randomCurrency(),
            fsc: 15,
            bedel: randomFsc(),
            carriage: Number((20 + Math.random()).toFixed(2)),
            cvd: 0.5,        
            bolge: Math.floor(Math.random() * 2) + 1
        },
        {
            carrier: "UPS International",
            grup: "Areks",
            cur: randomCurrency(),
            fsc: 15,
            bedel: randomFsc(),
            carriage: Number((20 + Math.random()).toFixed(2)),
            cvd: 0.5,        
            bolge: Math.floor(Math.random() * 2) + 1
        },
        {
            carrier: "Navlungo Lojistik",
            grup: "Areks",
            cur: randomCurrency(),
            fsc: 15,
            bedel: randomFsc(),
            carriage: Number((20 + Math.random()).toFixed(2)),
            cvd: 0.5,        
            bolge: Math.floor(Math.random() * 2) + 1
        },
        {
            carrier: "Locton İç & Dış Ticaret",
            grup: "Areks",
            cur: randomCurrency(),
            fsc: 15,
            bedel: randomFsc(),
            carriage: Number((20 + Math.random()).toFixed(2)),
            cvd: 0.5,        
            bolge: Math.floor(Math.random() * 2) + 1
        },
        {
            carrier: "Asset Lojistik",
            grup: "Areks",
            cur: randomCurrency(),
            fsc: 15,
            bedel: randomFsc(),
            carriage: Number((20 + Math.random()).toFixed(2)),
            cvd: 0.5,        
            bolge: Math.floor(Math.random() * 2) + 1
        }
    ]

        const carriers = tabledata.map((t) => {
            return {value:t.carrier,name:t.carrier}
            })
</script>
<form method="POST">
    <input type="hidden" name="id" value={order.id}>
    <PageHeader title="Operasyon Kartı Düzenle">
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
            <div class="grid grid-cols-2 gap-4 p-4 bg-white">
                <div>
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0 mb-4">Gönderen Bilgileri</h3>
                    <div class="mb-4">
                        <Label for="first_name" class="mb-2">Gönderen Cari</Label>
                        <Input value="Mia Tarım Ürünleri İth. İhr." type="text" id="first_name" placeholder="John" disabled />
                    </div>
                    <div class="mb-4">
                        <Label for="first_name" class="mb-2">Adres</Label>
                        <Input value="Karaduvar S.B. 6.Cadde No:17 Akdeniz / Mersin " type="text" id="first_name" placeholder="John" disabled />
                    </div>
                    <div class="mb-4">
                        <Label for="first_name" class="mb-2">Telefon</Label>
                        <Input value="+90-324-234-8080" type="tel" id="first_name" placeholder="John" disabled />
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0 mb-4">Alıcı Bilgileri</h3>
                    <div class="mb-4">
                        <Label for="first_name" class="mb-2">Alıcı Adı</Label>
                        <Input value="{order.userDetails.firstName} {order.userDetails.lastName}" type="text" id="first_name" placeholder="John" disabled />
                    </div>
                    <div class="mb-4">
                        <Label for="first_name" class="mb-2">Adres</Label>
                        <Input value="{order.userDetails.address.address} {order.userDetails.address.city}" type="text" id="first_name" placeholder="John" disabled />
                    </div>
                    <div class="mb-4">
                        <Label for="first_name" class="mb-2">Telefon</Label>
                        <Input value={order.userDetails.ssn} type="text" id="first_name" placeholder="John" disabled />
                    </div>
                </div>
            </div>
            <div class="w-full mt-4 p-4 bg-white">
                <div>
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0 mb-4">Gönderi Bilgileri</h3>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <div class="mb-4">
                                <Label for="first_name" class="mb-2">Taşıyıcı</Label>
                                <Select class="mt-2" items={carriers} />
                            </div>
                            <div class="mb-4">
                                <Label for="first_name" class="mb-2">API</Label>
                                <Input value="(Yok)" type="text" id="first_name" placeholder="John" disabled />
                            </div>
                            <div class="mb-4">
                                <Label for="first_name" class="mb-2">Varış Ülke</Label>
                                <Input value={order.country} type="text" id="first_name" placeholder="John" required />
                            </div>
                            <div class="mb-4">
                                <Label for="first_name" class="mb-2">Awb No</Label>
                                <Input name="awb" value={order.awb} type="text" id="first_name" placeholder="John" required />
                            </div>
                        </div>
                        <div>
                            <div class="mb-4">
                                <Label for="first_name" class="mb-2">Alış Firma Grup</Label>
                                <Input value="Areks" type="text" id="first_name" placeholder="John" disabled />
                            </div>
                            <div class="mb-4">
                                <Label for="first_name" class="mb-2">Satış Firma Grup</Label>
                                <Input value="Areks" type="text" id="first_name" placeholder="John" disabled />
                            </div>
                            <div class="mb-4">
                                <Label for="first_name" class="mb-2">Bölge</Label>
                                <Input type="text" id="first_name" placeholder="" disabled />
                            </div>
                            <div class="mb-4">
                                <Label for="first_name" class="mb-2">Awb Tarihi</Label>
                                <Input value={order.awb_date} type="date" id="first_name" placeholder="John" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="w-1/3">
                <div padding="none" class="bg-gray-200">
                    <div class="bg-gray-200 p-4">

                        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0 mb-4">Alış</h3>
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <Label for="first_name" class="mb-2">Döviz</Label>
                                <Input value="EUR" type="text" id="first_name" placeholder="John" readonly />
                            </div>
                            <div>
                                <Label for="first_name" class="mb-2">Taşıma Bedeli</Label>
                                <Input value={Number((20 + Math.random()).toFixed(2))} type="text" id="first_name" placeholder="John" disabled />
                            </div>
                            <div>
                                <Label for="first_name" class="mb-2">Eph Bedeli</Label>
                                <Input value="0" type="number" id="first_name" placeholder="John" />
                            </div>
                            <div>
                                <Label for="first_name" class="mb-2">Cvd Bedeli</Label>
                                <Input value="0" type="number" id="first_name" placeholder="John" />
                            </div>
                            <div>
                                <Label for="first_name" class="mb-2">Fsc Bedeli</Label>
                                <Input value="0" type="number" id="first_name" placeholder="John" />
                            </div>
                        </div>
                        <div class="mt-4"><strong>TOPLAM:</strong>20.92 TL</div>
                    </div>

                    <div class="bg-gray-200 p-4">

                        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0 mb-4">Satış</h3>
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <Label for="first_name" class="mb-2">Döviz</Label>
                                <Input value="EUR" type="text" id="first_name" placeholder="John" readonly />
                            </div>
                            <div>
                                <Label for="first_name" class="mb-2">Taşıma Bedeli</Label>
                                <Input value={Number((20 + Math.random()).toFixed(2))} type="text" id="first_name" placeholder="John" disabled />
                            </div>
                            <div>
                                <Label for="first_name" class="mb-2">Eph Bedeli</Label>
                                <Input value="0" type="number" id="first_name" placeholder="John" />
                            </div>
                            <div>
                                <Label for="first_name" class="mb-2">Cvd Bedeli</Label>
                                <Input value="0" type="number" id="first_name" placeholder="John" />
                            </div>
                            <div>
                                <Label for="first_name" class="mb-2">Fsc Bedeli</Label>
                                <Input value="0" type="number" id="first_name" placeholder="John" />
                            </div>
                        </div>
                        <div class="mt-4"><strong>TOPLAM:</strong>30.90 TL</div>
                    </div>


                </div>
        </div>
      </div>


</div>

    <div class="mb-8 p-8">
        <Table hoverable={true}>
            <TableHead>
                <TableHeadCell>Taşıyıcı</TableHeadCell>
                <TableHeadCell>Firma Grup</TableHeadCell>
                <TableHeadCell>Döviz</TableHeadCell>
                <TableHeadCell>Fsc Oranı</TableHeadCell>
                <TableHeadCell>Fsc Bedeli</TableHeadCell>
                <TableHeadCell>Taşıma Bedeli</TableHeadCell>
                <TableHeadCell>Cvd</TableHeadCell>
                <TableHeadCell>Toplam</TableHeadCell>
                <TableHeadCell>Bölge</TableHeadCell>
            </TableHead>
            <TableBody class="divide-y">
                {#each tabledata as row}
                    <TableBodyRow class="cursor-pointer">
                        <TableBodyCell>{row.carrier}</TableBodyCell>
                        <TableBodyCell>{row.grup}</TableBodyCell>
                        <TableBodyCell>{row.cur}</TableBodyCell>
                        <TableBodyCell>{row.fsc}</TableBodyCell>
                        <TableBodyCell>{row.bedel}</TableBodyCell>
                        <TableBodyCell>{row.carriage}</TableBodyCell>
                        <TableBodyCell>{row.cvd}</TableBodyCell>
                        <TableBodyCell>{(Number(row.bedel) + Number(row.carriage) + Number(row.cvd)).toFixed(2) }</TableBodyCell>
                        <TableBodyCell>{row.bolge}</TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
            </Table>
    </div>




</form>