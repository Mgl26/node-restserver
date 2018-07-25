//======================================
// Puerto
//======================================
process.env.PORT = process.env.PORT || 3000;

//======================================
// Entorno
//======================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//======================================
// Base de datos
//======================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    // urlDB = 'mongodb://usuariosDB:pass@ds253891.mlab.com:53891/cafe';
    urlDB = process.env.MONGO_URL;
}
process.env.URLDB = urlDB;