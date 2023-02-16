<script lang="ts">
	import type { IsProductObject } from 'src/interfaces/general';
    import type { PageData } from './$types';
    
    export let data: PageData;
    $: ({ products, categories, extra } = data)

    let categoryFilter:any

    const filterByCategory = (dt:IsProductObject[],f:string) : IsProductObject[] => {
        return categoryFilter == '%' ? dt : dt.filter(d => d.category == f)
    }

</script>
<input type="radio" bind:group={categoryFilter} value='%'>
{#each categories as category}
<input type="radio" bind:group={categoryFilter} value={category}>
{/each}
{categoryFilter}
{#each filterByCategory(products,categoryFilter) as product}
    <p>{extra}</p>
    <p><a href="/products/{product.id}">{product.title}</a></p>
{/each}

<form action="?/createProduct" method="POST">
    <h3>New Product</h3>
    <label for="title"> Title </label>
    <input type="text" id="title" name="title" />
    <label for="description"> Title </label>
    <textarea id="description" name="description" rows={5} />
    <button type="submit">Add Article</button>
</form>