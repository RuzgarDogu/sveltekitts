<script lang="ts">
    import { Input, Select, Textarea } from 'flowbite-svelte'
	  import { ListItem } from '@components';
	  import type { PageData } from '../$types';
    export let data: PageData;
    let selected = null
    $: ({ categories } = data)
</script>
<form action="?/createProduct" method="POST" class="m-3">
    <div class="pt-10 lg:col-span-5 xl:col-span-6 lg:row-start-1 lg:row-end-2">
      <div class="relative z-10 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800 dark:highlight-white/10">
        <article>
          <h2 class="text-lg font-semibold text-slate-900 pt-4 pb-2 px-4 sm:px-6 lg:px-4 xl:px-6 dark:text-slate-100 transition-opacity duration-[1.5s] delay-500 opacity-75">Create New Product</h2>
          <dl class="flex flex-wrap divide-y divide-slate-200 border-b border-slate-200 text-sm sm:text-base lg:text-sm xl:text-base dark:divide-slate-200/5 dark:border-slate-200/5">
            <div class="px-4 sm:px-6 lg:px-4 xl:px-6 pb-4">
              <dt class="sr-only">Date and time</dt>
              <dd class="transition-opacity duration-[1.5s] delay-500 opacity-25">
                <time datetime="2020-11-15T10:00:00-05:00">Thu Nov 15, 2020 10:00am</time> -
                <time datetime="2020-11-15T11:00:00-05:00">11:00am <span class="sr-only sm:not-sr-only"> EST</span>
                </time>
              </dd>
            </div>
            <ListItem title="Title">
              <Input name="title" size="sm" id='default-input' placeholder="Title" />
            </ListItem>
            <ListItem title="Category">
              <Select name="category" class="mt-2" items={categories} bind:value={selected} />
            </ListItem>
            <ListItem title="Price">
              <Input type="number" name="price" size="sm" id='default-input' placeholder="Price" />
            </ListItem>
            <ListItem title="Desciption">
              <Textarea {...{
                id: 'description',
                name: 'description',
                label: 'description',
                rows: 4,
                placeholder: 'Write a description...',
              }} />
            </ListItem>

          </dl>
          <div class="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6 p-4 sm:px-6 sm:py-5 lg:p-4 xl:px-6 xl:py-5">
            <button class="text-base font-medium rounded-lg bg-slate-100 text-slate-900 py-3 text-center cursor-pointer dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10">Cancel</button>
            <input type="submit" class="text-base font-medium rounded-lg bg-sky-500 text-white py-3 text-center cursor-pointer dark:highlight-white/20" value="Save"/>
          </div>
        </article>
      </div>
    </div>
</form>



