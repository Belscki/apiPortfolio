const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(process.env.DB_PATH, (err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
      console.log('Conectado ao banco de dados SQLite.');
    }
  });

module.exports = {

};