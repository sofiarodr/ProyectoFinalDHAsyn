const db = require('../config/config');
const crypto = require('crypto');

const Product = {};

// Zona Vmarkets

Product.getAllProducts = () => {
    const sql = `
    SELECT 
        *
    FROM
        producto
    `;

    return db.manyOrNone(sql);
}

Product.searchProducts = (query) => {
    const sql = `
        SELECT *
        FROM producto
        WHERE name LIKE $1`; // Filtrar por nombre que coincide con el texto de búsqueda
    return db.manyOrNone(sql, [`%${query}%`]); // Usar '%' para coincidencias parciales
}

Product.createProduct = (product) => {
    const sql = `
    INSERT INTO
        producto(
            name,
            description,
            price,
            image,
            created_at,
            updated_at
        )
    VALUES($1, $2, $3, $4, $5, $6) RETURNING id
    `;
    return db.oneOrNone(sql, [
        product.name,
        product.description,
        product.price,
        product.image,
        new Date(),
        new Date()
    ]);
}






module.exports = Product;