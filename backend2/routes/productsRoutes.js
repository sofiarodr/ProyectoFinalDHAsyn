const ProductsController = require('../controllers/productsController');

module.exports = (app, upload) => {
   
    app.get('/api/users/getAll', ProductsController.getAllProducts);
    // Ruta en el backend
    app.get('/api/products', ProductsController.searchProducts);


    app.post('/api/products/create',upload.array('image', 1), ProductsController.createWithImage);
  

}