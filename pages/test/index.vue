<template>

    <button @click="handleBackHome">Home</button>
    <button class="bg-blue" @click="handleClick">Add new</button>
    <button @click="handleClearData">Clear all</button>
    <input v-model="name"/>
    <div>{{ name }}</div>
    <h1 v-for="(product, index) in productsStore.products" class="text-blue-500" :key="index">
        {{ product.name }} : {{  product.price }}
    </h1>
    <h2>{{ mountains }}</h2>
</template>

<script lang="ts">
import { useProductsStore } from '~~/store/ProductsStore';
export default {
    async setup() {
        const productsStore = useProductsStore();
        const name = ref("first");
        const mountains: String = await fetch('https://api.nuxtjs.dev/mountains').then(res => {
            debugger
            return res.json();
        });
        const handleClick = () => {
            const nextIndex = productsStore.products.length + 1;
            productsStore.addNewProduct({
                name: "Product "+ nextIndex,
                price: Math.floor(Math.random()*10)
            })
        }

        const handleClearData = () => {
            productsStore.$patch({products: []});
        }

        return {
            productsStore,
            handleClick,
            handleClearData,
            name,
            mountains
        }
    },
    methods: {
        handleBackHome() {
            this.$router.replace("/")
        },
    },
}


</script>

<style scope lang="scss">
button {
    margin: 10px 24px;
    border-radius: 1rem;
    width: 80px;
    height: 24px;
}
</style>