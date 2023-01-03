class Product{
    id;
    image;
    nameProduct;
    price;

    constructor(id, image, nameProduct, price) {
        this.id = id
        this.image = image;
        this.nameProduct = nameProduct;
        this.price = price;
    }
    setImage(image) {
        this.img = image;
    }

    setNameProduct(nameProduct) {
        this.nameProduct = nameProduct;
    }

    setPrice(price) {
        this.price = price;
    }

    getImage() {
        return this.image;
    }

    getNameProduct() {
        return this.nameProduct;
    }

    getPrice() {
        return this.price;
    }
}
