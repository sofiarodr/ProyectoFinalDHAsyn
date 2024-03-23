const Product = require('../models/product');
const storage = require('../utils/cloud_storage');


module.exports = {
    // Zona Vmarkets

    async getAllProducts(req, res, next) {
        try {
            const data = await Product.getAllProducts();    
            console.log(`Productos: ${data}`);
            return res.status(201).json(data);
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener los usuarios'
            });
        }
    },

    async searchProducts(req, res, next) {
        try {
            const query = req.query.q; // Obtener el texto de búsqueda de la consulta
            const data = await Product.searchProducts(query); // Función para buscar productos filtrados
            return res.status(200).json(data);
        } catch (error) {
            console.error('Error al buscar productos:', error);
            return res.status(500).json({ error: 'Error al buscar productos' });
        }
    },
    

    async createProduct(req, res, next) {
        try{
            const producto = req.body;
            const data = Product.createProduct(producto);

            return res.status(201).json({
                success: true,
                message: 'EL producto se Registro correstamente',
                data: data.id
            });

             
        }
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Hubo un error con el registro del producto',
                error: error
            });
        }

    },

    async createWithImage(req, res, next) {
        try {
            const product = JSON.parse(req.body.producto);
            console.log(`Datos enviados del usuario: ${product}`);
    
            const files = req.files;
            console.log('Archivos adjuntos:', files);
    
            if (files.length > 0) {
                const pathImage = `image_${Date.now()}`; // NOMBRE DEL ARCHIVO
                console.log('Nombre del archivo:', pathImage);
    
                const url = await storage(files[0], pathImage);
    
                if (url != undefined && url != null) {
                    product.image = url;
                } else {
                    console.log('URL no disponible');
                }
            } else {
                console.log('No se adjuntó ninguna imagen');
            }
    
            const data = await Product.createProduct(product);
    
            return res.status(201).json({
                success: true,
                message: 'El registro se realizó correctamente',
                data: data.id
            });
    
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Hubo un error con el registro del usuario',
                error: error
            });
        }
    },
    
}