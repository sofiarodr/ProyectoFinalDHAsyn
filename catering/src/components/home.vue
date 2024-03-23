<template>
    <div class="page">
    <!-- Appbar superior -->
    <header class="appbar">
      <div class="container">
        <h2 class="title">Productos Catering</h2>
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
    <div class="containers">

      <h2>Página de Inicio </h2>
      <img src="../imagen/catering.jpg" alt="Imagen" class="imagen"/>
      <h4> Prestamos el mejor servicio de catering - esta es la zona administrativa</h4>
      <div>
        <router-link to="/buscar">
          <button class="button">Buscar Productos</button>
        </router-link>
        <router-link to="/agregar">
          <button class="button">Agregar Producto</button>
        </router-link>
      </div>
     
    </div>

</div>
  </template>
  
  <script>
  export default {
    name: 'InicioPagina'
  };
  </script>
  
  <style>
.imagen{
    width: 35%;}
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
  align-items: center !important;
  justify-content: center !important;
  margin-top: -100px;
  margin-left: -75px;
  margin-right: -75px;
  width: 120%;}
  
/* Estilos para el appbar superior */
.appbar {
  background-color: #898c91;
  color: #5b1881;
  
  width: 100%;
  margin-top: -90px;
}

.appbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  width: 1200px;
  padding: -40px;
  margin-top: 5px;
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

.containers {
  max-width: 500px;
  margin: 5px auto;
  background-color: #d4ccfa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  
  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 
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
  padding: 20px;
  background-color: #ff009d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 40px;
}

.button:hover {
  background-color: #0056b3;
}
</style>

  