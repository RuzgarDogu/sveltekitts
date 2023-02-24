<script lang="ts">
	import type { PageData } from './$types';
    import { Card } from "flowbite-svelte";
	import { PageHeader } from '@components';
    import { Bar } from 'svelte-chartjs';
    import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
	export let data: PageData;
	
    let { chartdata } = data

</script>

<PageHeader title="Genel Bakış">

</PageHeader>
<div class="flex px-8 pb-8 gap-x-8">
    <div class="w-7/12 bg-white rounded-xl p-8">
        <div class="w-full">    
            <Bar data={chartdata} options={{ responsive: true }} />
          </div>
    </div>
    <div class="w-5/12 bg-white rounded-xl p-8">
        <div class="w-full">    
            <strong>Son Siparişler</strong>
          </div>
    </div>
  </div>
