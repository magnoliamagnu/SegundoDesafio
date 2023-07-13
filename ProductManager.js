const ProductManager = require('./ProductManager');

const productManager = new ProductManager('products.json');

// Agregar un producto
const newProduct = {
  title: 'Producto de ejemplo',
  description: 'Descripción del producto',
  price: 9.99,
  thumbnail: 'ruta/de/imagen.jpg',
  code: 'ABC123',
  stock: 10
};
const addedProduct = productManager.addProduct(newProduct);
console.log('Producto agregado:', addedProduct);

// Obtener todos los productos
const allProducts = productManager.getProducts();
console.log('Todos los productos:', allProducts);

// Obtener un producto por su id
const productId = 1; // Supongamos que el id del producto que queremos obtener es 1
const productById = productManager.getProductById(productId);
console.log('Producto por id:', productById);

// Actualizar un producto
const productIdToUpdate = 1; // Supongamos que el id del producto que queremos actualizar es 1
const updatedFields = { price: 19.99, stock: 5 }; // Campos que queremos actualizar
const updatedProduct = productManager.updateProduct(productIdToUpdate, updatedFields);
console.log('Producto actualizado:', updatedProduct);

// Eliminar un producto
const productIdToDelete = 1; // Supongamos que el id del producto que queremos eliminar es 1
const updatedProducts = productManager.deleteProduct(productIdToDelete);
console.log('Productos actualizados (después de eliminar):', updatedProducts);
