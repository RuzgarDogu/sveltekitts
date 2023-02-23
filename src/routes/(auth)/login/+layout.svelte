<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

<div class="w-full h-full" style="background-color: #181e2b;">
    <div class="w-full flex flex-col">
        <div class="md:grid md:grid-cols-2">
            <div class="w-fill md:h-auto flex flex-col justify-between p-8 md:ml-12 md:pl-12 md:py-12 md:mr-8">
                    <img width="200" src="images/logo.png" alt="">
                    <div>                    
                    
                        <div class="relative">
                            <h1 class="mt-6 text-4xl text-slate-400 text-left max-w-3xl mx-auto dark:text-slate-400">Pazaryeri Entegrasyonu</h1>
                            <p class="mt-6 text-lg text-slate-600 text-left max-w-3xl mx-auto dark:text-slate-400">
                                Arniva Pazaryeri Entegrasyonu ile tüm satış kanallarınızı tek bir sistem üzerinden yönetebilirsiniz.
                            </p>
                            <slot />
                          </div>
                    
                    
                    </div>
                    <div>
                        <p class="mt-2 text-lg text-slate-600 text-left max-w-3xl mx-auto dark:text-slate-400"><strong >ARNIVA</strong> © 2023 | Her hakkı saklıdır.</p>
                    </div>
            </div>
            <div class="hidden md:flex w-full h-screen" style="background-image: url(images/bg.jpg); background-size: cover;"></div>
        </div>
    </div>
</div>
