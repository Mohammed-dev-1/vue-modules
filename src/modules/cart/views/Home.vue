<template>
    <div style="padding: 20px;">
        <h1>Cart page</h1>
        <small>Welcome here !</small>
        <br>
        <br>
        <button style="margin: 0px 10px;" @click="goBack()">Go Back</button>
        <button style="margin-bottom: 20px;" @click="goToHome()">Go To Home</button>
        <hr>
        <br>
        <ul style="list-style: none;" v-for="(item, itemIndex) in cartItems" :key="itemIndex">
            <li v-for="(attr, attrIndex) in Object.keys(item)" :key="attrIndex">
                {{attr}}: {{item[attr]}}
            </li>
            <br>
        </ul>
    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
    name: 'HomeComponent',
    setup() {
        const router = useRouter();
        const route = useRoute();
        const store = useStore();

        const goBack = () => router.back();
        const goToHome = () => router.push('/');
        const cartItems = store.state.cart.items;

        // console.log(router, route);

        return {
            goBack,
            goToHome,
            cartItems
        }
    }
}
</script>