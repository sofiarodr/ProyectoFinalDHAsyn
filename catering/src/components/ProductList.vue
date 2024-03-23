<template>
  <div class="page">
    <!-- Appbar superior -->
    <header class="appbar">
      <div class="container">
        <h2 class="title">Productos Catering - Buscar Productos </h2>
        <button class="appbar-button" @click="toggleMenu">&#9776;</button>
      </div>
    </header>

    <!-- Menú Appbar izquierdo -->
    <nav class="menu-appbar" :class="{ 'menu-open': menuOpen }">
      <ul>
        <li><button @click="goToList">Lista de Productos</button></li>
        <li><button @click="goToCreate">Crear Producto</button></li>
        <li><button @click="customFunction">Otra función</button></li>
      </ul>
    </nav>

    <!-- Contenedor de búsqueda y resultados -->
    <div class="container">
      <h2>Buscador de Productos</h2>
      <input type="text" v-model="query" placeholder="Buscar productos..." />
      <button @click="buscarProductos">Buscar</button>
      <!-- Mostrar el mensaje de error si existe -->
      <p v-if="error" style="color: red;">{{ error }}</p>
      <!-- Mostrar la tabla de productos -->
      <table v-else-if="productos.length">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos" :key="producto.id">
            <td>{{ producto.id }}</td>
            <td>{{ producto.name }}</td>
            <td>{{ producto.description }}</td>
            <td>{{ producto.price }}</td>
            <td>
              <img :src="producto.image" alt="Imagen del productoses" style="max-width: 100px;" />
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>No se encontraron productos.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      query: '',
      productos: [],
      error: '', // Agregamos una variable para manejar errores
      menuOpen: false, // Agregamos una variable para controlar la visibilidad del menú
    };
  },
  methods: {
    async buscarProductos() {
    try {
        const response = await axios.get('http://192.168.1.18:3000/api/products', {
            params: {
                q: this.query, // Enviar el texto de búsqueda como parámetro de consulta
            },
        });
        this.productos = response.data;
        this.error = ''; // Limpiar el error si la solicitud es exitosa
    } catch (error) {
        console.error('Error al buscar productos:', error);
        this.error = 'Error al buscar productos. Por favor, inténtalo de nuevo.'; // Mensaje de error personalizado
    }
   },

    toggleMenu() {
      // Función para alternar la visibilidad del menú Appbar izquierdo
      this.menuOpen = !this.menuOpen;
    },
    goToList() {
      // Función para ir a la lista de productos
      this.$router.push('/buscar');
    },
    goToCreate() {
      // Función para ir a la página de crear producto
      this.$router.push('/agregar');
    },
    customFunction() {
      // Función para la tercera opción del menú Appbar izquierdo
      this.$router.push('/');
    }
  },
};
</script>
<style>



/* Estilos de la tabla */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}



.page {
  /* Establece la imagen de fondo */
  background-image: url('../imagen/fondo.jpg');
  /* Ajusta el tamaño y la posición de la imagen */
  background-size: cover;
  background-position: center;
  /* Establece la altura mínima para ocupar toda la pantalla */
  min-height: 100vh;
  /* Otros estilos, como alineación, márgenes, etc. */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* Estilos para el appbar superior */
.appbar {
  background-color: #898c91;
  color: #5b1881;
  
  width: 100%;
  margin-top: 5px !important;
}

.appbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  padding: -20px;
  margin-top: -210px;
}

.appbar-button {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Estilos para el menú appbar izquierdo */
.menu-appbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #f4f4f4;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000; /* Asegurar que el menú esté por encima del contenido */
}

.menu-open {
  transform: translateX(0);
}

.menu-appbar ul {
  list-style: none;
  padding: 0;
}

.menu-appbar li {
  margin-bottom: 40px;
}

.menu-appbar button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: none;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
}

.menu-appbar button:hover {
  background-color: #d1bfe9;
}

.container {
  max-width: 1200px;
  margin: 5px auto;
  padding: 35px;
  background-color: #d4ccfa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 
}

.containerproduct {
  max-width: 1200px !important;
  margin: 5px auto;
  padding: 35px;
  background-color: #d4ccfa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 
}
.title {
  text-align: center;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 5px;
}

.label {
  font-weight: bold;
}

.input,
.textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
</style>

