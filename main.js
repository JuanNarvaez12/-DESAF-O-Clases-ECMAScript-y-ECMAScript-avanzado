import crypto from 'crypto'
class ProductManager {
    constructor() {
        this.products = [];
    }
    
    addProduct(productName, description, price, thumbnail, code, stock) {
        let exists = this.products.some(product => product.code === code)
        
        if (!exists&& (!productName ||  !description  ||  !price || !thumbnail || !stock))  {
            console.log("Todos lo campos son obligatorios.");
        } else  if (exists){
            console.log("El código ya existe. No se puede agregar el producto, pero los demás campos son válidos.");
        } else {
            /*productName.id = crypto.randomBytes(10).toString('hex')*/
            let id = crypto.randomBytes(5).toString('hex')
            let newProduct = {
                title: productName,
                description: description,
                price : price,
                thumbnail : "ruta de imagen",
                code: code,
                stock: stock,
                id : id
            };

            this.products.push(newProduct);
            console.log("Producto agregado correctamente.");
        }
    }
    getProducts() {
        return this.products;
    }
    getProductById (productId){
        let product = this.products.find(product => product.id === productId);

        if (product) {
            return product;
        } else {
            console.log("ERROR : Not found");
        }
    }
};


