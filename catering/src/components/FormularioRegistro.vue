<template>
  <div class="page">
    <!-- Otras partes del código... -->
    <header class="appbar">
      <div class="container">
        <h2 class="title">Productos Catering - Agregar Producto</h2>
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
    <!-- Contenido principal -->
    <div class="container">
      <h2 class="title">Registrar Producto</h2>
      <form @submit.prevent="registrarProducto" class="form-container">
  <div class="form-group">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" v-model="nombre" required>
  </div>
  <div class="form-group">
    <label for="descripcion">Descripción:</label>
    <textarea id="descripcion" v-model="descripcion" required></textarea>
  </div>
  <div class="form-group">
    <label for="precio">Precio:</label>
    <input type="number" id="precio" v-model.number="precio" required>
  </div>
  <div class="form-group">
    <label for="imagen">Imagen:</label>
    <input type="file" id="imagen" accept="image/*" @input="handleImagenSeleccionada" required>
  </div>
  <button type="submit" class="submit-button">Registrar Producto</button>
</form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      descripcion: '',
      imagen: '', // Solo una imagen en lugar de un arreglo de imágenes
      menuOpen: false
    };
  },
  methods: {
    handleImagenSeleccionada(event) {
      const file = event.target.files[0];
      if (!file) return; // Si no se seleccionó ningún archivo, sal del método
      this.imagen = file; // Corregir el nombre de la propiedad a this.imagen

    },
    async registrarProducto() {
      try {
        // Crea un objeto FormData para enviar los datos del formulario
        const formData = new FormData();
        formData.append('producto', JSON.stringify({
          name: this.nombre,
          description: this.descripcion,
          price: this.precio
        }));
        formData.append('image', this.imagen); // Agrega la imagen al FormData

        // Realiza la solicitud POST al servidor
        const response = await fetch('http://192.168.1.18:3000/api/products/create', {
          method: 'POST',
          body: formData
        });

        // Lee la respuesta del servidor como JSON
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
        alert('Producto registrado exitosamente');
        // Restablece los campos del formulario después de registrar el producto
        this.nombre = '';
        this.descripcion = '';
        this.precio = null;
        this.imagen = null;
      } catch (error) {
        console.error('Error al registrar el producto:', error);
        alert('Error al registrar el producto');
      }
    },
  
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    goToList() {
      this.$router.push('/buscar');
    },
    goToCreate() {
      this.$router.push('/agregar');
    },
    customFunction() {
      this.$router.push('/');
    }
  }
};
</script>



  <style>

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
  background-color: #8e8991;
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
  margin-top: -10px;
}

.appbar-button {
  background: none;
  border: none;
  color: #080808;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Estilos para el menú appbar izquierdo */
.menu-appbar {
  background-color: #4b0082; /* Morado oscuro */
  padding: 10px 0;
}

.menu-appbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu-appbar ul li {
  display: inline;
  margin-right: 10px;
}

.menu-appbar ul li a {
  color: #f1cde4; /* Color de letra blanco */
  text-decoration: none;
}

.menu-appbar ul li:last-child {
  margin-right: 0;
}

.menu-appbar button {
  background-color: transparent;
  border: none;
  color: rgb(14, 13, 13);
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-appbar button:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Color de fondo al pasar el ratón */
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
  color: #520505;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

.form-container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: rgb(242, 210, 245);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}


</style>
  