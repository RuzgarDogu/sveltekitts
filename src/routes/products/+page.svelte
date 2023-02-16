<script lang="ts">
	import type { IsProductObject } from 'src/interfaces/general';
    import type { PageData } from './$types';
    
    export let data: PageData;
    $: ({ products, categories, extra } = data)

    $:console.log("products",products)

    let categoryFilter:[] = []

    const filterByCategory = (dt:IsProductObject[],f:(string|undefined)[]) : IsProductObject[] => {
        return dt.filter(d => f.includes(d.category))
    }

</script>

<nav>
    <ul>
      <li>
        <details role="list">
            <summary aria-haspopup="listbox">Select Categories</summary>
            <ul role="listbox">
            {#each categories as category}
              <li>
                <label>
                    <input type=checkbox bind:group={categoryFilter} name={category} value={category}>
                    {category}
                </label>
              </li>
              {/each}
            </ul>
          </details>
      </li>
      <li>
        <details role="list">
          <summary aria-haspopup="listbox" role="button">Dropdown</summary>
          <ul role="listbox">
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>

{#each filterByCategory(products,categoryFilter) as product}
  <article>
    <header><img src="{product.images?.[0] || 'Placeholder will come here...'}" alt=""></header>
    {product.title}
    <footer><a href="/products/{product.id}">See Details</a></footer>
  </article>
{/each}

<form action="?/createProduct" method="POST">
    <h3>New Product</h3>
    <label for="title"> Title
      <input type="text" id="title" name="title" />
    </label>
    <label for="description"> Title
      <textarea id="description" name="description" rows={5} />
    </label>
    <input type="submit" value="Add Article"/>
</form>
