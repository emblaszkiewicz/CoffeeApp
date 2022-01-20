class Product{
  constructor(id, data){
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;
    
    console.log(thisProduct);
  }
}

export default Product;