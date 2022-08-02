const Module = () => import("./Module.vue");
const Home = () => import("./views/Home.vue");

const moduleRoute = {
    path: '/cart',
    name: 'Cart',
    component: Module,
    children: [{
        path: '',
        name: 'Cart',
        component: Home
    }]
}

export default router => {
    router.addRoute(moduleRoute);
}