import { createApp } from 'vue'; // Importa createApp de vue en lugar de Vue
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Importa createRouter y createWebHistory de vue-router
import ProductList from './components/ProductList.vue';
import FormularioRegistro from './components/FormularioRegistro.vue';
import home from './components/home.vue';

const routes = [
  { path: '/buscar', component: ProductList },
  { path: '/agregar', component: FormularioRegistro },  
  { path: '/home', component: home },
  { path: '/', redirect: '/home' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App); // Crea la aplicación

app.use(router); // Usa el enrutador

app.mount('#app'); // Monta la aplicación en el elemento con el id 'app'
