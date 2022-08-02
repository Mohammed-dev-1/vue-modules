<template>
    <div>
        <h1>Products</h1>
        <small>Welcome to product page</small>
        <br>
        <br>
        <button style="margin: 0px 10px;" @click="goBack()">Go Back</button>
        <button style="margin: 0px 10px;" @click="addToCart()">Add to cart</button>
        <button @click="goToCart()">Go To Cart</button>
    </div>
</template>

<script>
import { ItemModel } from '@/models/item.model';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex';
import * as types from '../store/mutation-types';

export default { 
    name: 'Home',
    setup() {
        const router = useRouter();
        const route = useRoute();
        const store = useStore();

        const goBack = () => router.back();
        const goToCart = () => router.push('/cart');
        // const addToCart = () => store.commit(
        //     `products/${types.ADD_TO_CART}`,
        //     new ItemModel(10, 'test', 'test sub', 'test address')
        // )

        const addToCart = () => store.dispatch(
            `products/addToCart`,
            new ItemModel(10, 'test', 'test sub', 'test address')
        ).then(() => goToCart());

        // console.log(router, route);
        // console.log(...store.state.products.items);

        return {
            goBack,
            goToCart,
            addToCart
        }
    }
}
</script>