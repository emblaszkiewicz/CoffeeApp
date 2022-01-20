export const select = {
  templateOf: {
    products: '#template-products',
  },
  containerOf: {
    pages: '#pages',
    products: '.products-wrapper',
  },
  nav: {
    links: '.main-nav a',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

export const settings = {
  db: {
    url: 'http://localhost:3131/',
    products: 'products',
  }  
};

export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
};