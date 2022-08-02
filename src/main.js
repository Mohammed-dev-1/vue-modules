import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

/* CORE MODULES */
import cartModule from './modules/cart';
import productsModule from './modules/products';

/* Register module method */
import { registerModules } from './register-modules';

registerModules({
    products: productsModule,
    cart: cartModule
});

const vueApp = createApp(App)

vueApp.use(router);
vueApp.use(store);

vueApp.mount('#app')
