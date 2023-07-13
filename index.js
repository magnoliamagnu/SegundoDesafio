const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  addProduct(product) {
    const products = this.getProducts();
    const newProduct = { id: this.getNextId(), ...product };
    products.push(newProduct);
    this.saveProducts(products);
    return newProduct;
  }

  getProducts() {
    const fileData = this.readFileData();
    return fileData ? JSON.parse(fileData) : [];
  }

  getProductById(id) {
    const products = this.getProducts();
    return products.find((product) => product.id === id);
  }

  updateProduct(id, updatedFields) {
    const products = this.getProducts();
    const productIndex = products.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      const updatedProduct = { ...products[productIndex], ...updatedFields };
      products[productIndex] = updatedProduct;
      this.saveProducts(products);
      return updatedProduct;
    }

    return null;
  }

  deleteProduct(id) {
    const products = this.getProducts();
    const updatedProducts = products.filter((product) => product.id !== id);
    this.saveProducts(updatedProducts);
    return updatedProducts;
  }

  getNextId() {
    const products = this.getProducts();
    const maxId = products.reduce((max, product) => Math.max(max, product.id), 0);
    return maxId + 1;
  }

  readFileData() {
    try {
      return fs.readFileSync(this.filePath, 'utf8');
    } catch (error) {
      console.error(`Error reading file: ${error}`);
      return null;
    }
  }

  saveProducts(products) {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(products, null, 2));
    } catch (error) {
      console.error(`Error saving products: ${error}`);
    }
  }
}

module.exports = ProductManager;
