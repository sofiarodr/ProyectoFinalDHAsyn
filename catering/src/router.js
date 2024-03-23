import Vue from 'vue';
import VueRouter from 'vue-router';
import BuscarProductos from './components/BuscarProductos.vue';
import AgregarProducto from './components/AgregarProducto.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/buscar' }, // Redirigir a /buscar por defecto
  { path: '/buscar', component: BuscarProductos },
  { path: '/agregar', component: AgregarProducto },
  { path: '/home', component: AgregarProducto }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
