import { defineStore } from 'pinia'
import products from '@/data/products.json'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export type Product = {
  name: string,
  price: number

}

export const useProductsStore = defineStore('ProductStore', {
  state: () => ({ 
    products: products
  }),
  getters: {
    getAllProducts(): Product[] {
      return this.products
    },
    searchProduct(searchText: any): Product[] {
      return this.products.filter((product: Product) => product.name.toLowerCase().indexOf(searchText.toLowerCase()) > 0);
    }
  },
    actions: {
      addNewProduct(product: Product) {
        this.products.push(product)
      },
    }
  })
