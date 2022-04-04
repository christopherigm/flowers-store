/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
// const fetchData = require('./fetch-data');

const port = 3000;
const app = express();

app.use('/static', express.static('/static'));
app.use('/assets', express.static('/assets'));

const hbs = exphbs.create({
  helpers: {
    escapeJS: ( data ) => {
      return JSON.stringify( data );
    }
  },
  extname: '.hbs'
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.enable('view cache');
app.locals.layout = false;

const commonIndex = (req, res) => {
  return res.render('index', {
    seo: {
      title: 'Flowers Store',
      og_title: 'Flowers Store',
      og_description: 'Flowers Store',
      img_og_picture: '/assets/seo.jpg',
      og_site_name: 'Flowers Store',
      url: '/',
      keywords: 'Flowers Store'
    }
  });
};

app.get('/mi-cuenta', commonIndex);
app.get('/mi-cuenta/configuracion', commonIndex);
app.get('/mi-cuenta/direcciones', commonIndex);
app.get('/mi-cuenta/pagos', commonIndex);
app.get('/mi-cuenta/carrito', commonIndex);
app.get('/mi-cuenta/ordenes', commonIndex);
app.get('/mi-cuenta/favoritos', commonIndex);
app.get('/terminos-y-condiciones', commonIndex);
app.get('/politica-de-privacidad', commonIndex);
app.get('/uso-de-datos-de-usuario', commonIndex);
app.get('/changelog', commonIndex);
app.get('/about', commonIndex);
app.get('/create-account', commonIndex);
app.get('/login', commonIndex);
app.get('/activate/:token', commonIndex);
app.get('/buscador', commonIndex);
app.get('/categorias', commonIndex);
app.get('/categorias/:groupId', commonIndex);
app.get('/', commonIndex);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
