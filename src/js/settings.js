export const select = {
  templateOf: {
    products: '#template-products',
  },
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    products: '.products-wrapper',
    pageTitle: '.hero-inner',
  },
  nav: {
    links: '.main-nav a',
    hamburger: '.hamburger',
    ul: '.main-nav ul',
  },
  links: {
    arrow: '.discover a',
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
  hero: {
    active: 'active',
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname =='localhost' ? ':3131' : ''),
    products: 'products',
  }  
};

export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
};