import type { LayoutLoad } from './$types';
import { Store } from '@models';

export const load = (async () => {
	// ÖNEMLİ: Burada async/await kullanırsanız, LayoutLoad tipiyle uyumlu olmayan bir değer döndürürsünüz.
	// Aşağıdaki gibi yazılırsa, bir waterfall oluşur. Yani önce Store.get() çalışır, sonra Store.getCategories() çalışır.
	// Sveltekit bunun önüne geçmek için load fonksiyonunu await eder. Yani load fonksiyonu bir Promise döndürür.
	// const products = await Store.get()
	// const categories = await Store.getCategories()

	// Eğer bir değerin diğer değerin yüklenmesini beklemesini istiyorsanız, Promise.all kullanabilirsiniz.
	// Veya await kullanabilirsiniz. Ama bu durumda load fonksiyonu bir Promise döndürmeli.
	// Bu arada bu notların bir kısmı sveltekit'in dökümantasyonundan alınmıştır.

	// Doğru kullanım:
	return {
		products: Store.get(),
		categories: Store.getCategories()
	};
}) satisfies LayoutLoad;
