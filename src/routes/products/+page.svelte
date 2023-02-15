<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    $: ({ products, extra } = data)
</script>

{#each products as product}
    <p>{extra}</p>
    <p>{product.title}</p>
{/each}

<form action="?/createProduct" method="POST">
    <h3>New Product</h3>
    <label for="title"> Title </label>
    <input type="text" id="title" name="title" />
    <label for="description"> Title </label>
    <textarea id="description" name="description" rows={5} />
    <button type="submit">Add Article</button>
</form>