class ProductManager {
    constructor() {
        this.products = [];
        this.cont = 0;
    };

    addProduct(productName, description, price, thumbnail, code,stock) {
        if (!productName || !description || !price || !thumbnail ||  !stock) {
            console.log("Todos los campos son obligatorios.");
            return;
        };
        let exists = this.products.some(product => product.code === code)
        let nameExists = this.products.some(product => product.title === productName);
        if (exists || nameExists) {
            console.log("El nombre o el codigo ya existe. No se puede agregar el producto.");
            return;
        }else {
        this.cont++;
        let newProduct = {
            title: productName,
            description: description,
            price: price,
            thumbnail: thumbnail, 
            code: this.cont,
            stock: stock,
            };

        this.products.push(newProduct);
        console.log("Producto agregado correctamente.");
        }

    } 
    getProducts() {
        return this.products;
    };

    getProductById(productId) {
        let product = this.products.find(product => product.code === productId);
        return product ? product : "ERROR: Not found";
    };
}

