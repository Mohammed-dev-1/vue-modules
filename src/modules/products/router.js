const Module = () => import('./Module.vue');
const Home = () => import('./views/Home.vue');

const moduleRoutes = {
    path: '/products',
    component: Module,
    name: 'Products',
    children: [
        {
            path: '',
            name: 'Products',
            component: Home,
        }
    ]
}

export default router => {
    router.addRoute(moduleRoutes);
}