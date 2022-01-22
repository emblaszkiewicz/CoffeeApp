import {select, templates} from '../settings.js';
import utils from '../utils.js';

class Product{
  constructor(id, data){
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.render();

    console.log(thisProduct);
  }

  render(){
    const thisProduct = this;

    const generatedHTML = templates.products(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const homeContainer = document.querySelector(select.containerOf.home);
    homeContainer.appendChild(thisProduct.element);

    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const homeProducts = document.querySelector(select.containerOf.products);
    homeProducts.appendChild(thisProduct.element);
  }
}

export default Product;