import type { PageLoad } from './$types';

export const load = (async () => {
    const chartdata = {
        labels: ['Hepsiburada', 'N11', 'Amazon', 'Shopify', 'Trendyol'],
        datasets: [
          {
            label: '% Satışlar',
            data: [12345987, 5324456, 3212111, 1211457, 978202, 3121965],
            backgroundColor: [
              'rgba(255, 134,159,0.4)',
              'rgba(98,  182, 239,0.4)',
              'rgba(255, 218, 128,0.4)',
              'rgba(113, 205, 205,0.4)',
              'rgba(170, 128, 252,0.4)',
              'rgba(255, 177, 101,0.4)',
            ],
            borderWidth: 2,
            borderColor: [
              'rgba(255, 134, 159, 1)',
              'rgba(98,  182, 239, 1)',
              'rgba(255, 218, 128, 1)',
              'rgba(113, 205, 205, 1)',
              'rgba(170, 128, 252, 1)',
              'rgba(255, 177, 101, 1)',
            ],
          },
        ],
      };
      
	return {
		chartdata
	};
}) satisfies PageLoad;