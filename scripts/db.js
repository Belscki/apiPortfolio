const sqlite3 = require('sqlite3').verbose();

function connect() {
  return new sqlite3.Database(process.env.DB_PATH, (err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
      console.log('Conectado ao banco de dados SQLite.');
    }
  });
}

const createTables = () => {
  const db = connect();

  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      NAME TEXT NOT NULL,
      IDADE INTEGER NOT NULL,
      NASCIMENTO TEXT NOT NULL,
      CARGO TEXT NOT NULL
    );
  `;
  const createSkillsTable = `
    CREATE TABLE IF NOT EXISTS skills (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      NOME TEXT NOT NULL,
      NIVEL TEXT NOT NULL,
      DESCRICAO TEXT,
      IMG TEXT
    );
  `;
  const createFeaturesTable = `
    CREATE TABLE IF NOT EXISTS features (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      NOME_USER INTEGER,
      CATEGORIA TEXT NOT NULL,
      NOME_SKILLS INTEGER,
      FOREIGN KEY (NOME_USER) REFERENCES users(ID),
      FOREIGN KEY (NOME_SKILLS) REFERENCES skills(ID)
    );
  `;
  const createContatoTable = `
    CREATE TABLE IF NOT EXISTS contato (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      NOME_USER INTEGER,
      TIPO TEXT NOT NULL,
      INFO TEXT NOT NULL,
      IMG TEXT,
      FOREIGN KEY (NOME_USER) REFERENCES users(ID)
    );
  `;
  const createProjetosTable = `
    CREATE TABLE IF NOT EXISTS projetos (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      NOME_USER INTEGER,
      NOME TEXT NOT NULL,
      INFO TEXT NOT NULL,
      IMG TEXT,
      FOREIGN KEY (NOME_USER) REFERENCES users(ID)
    );
  `;
  const createProjetosSkillsTable = `
    CREATE TABLE IF NOT EXISTS projetos_skills (
      PROJETO_ID INTEGER,
      SKILL_ID INTEGER,
      NOME_USER,
      FOREIGN KEY (PROJETO_ID) REFERENCES projetos(ID),
      FOREIGN KEY (SKILL_ID) REFERENCES skills(ID),
      FOREIGN KEY (NOME_USER) REFERENCES users(ID),
      PRIMARY KEY (PROJETO_ID, SKILL_ID)
    );
  `;

  db.run(createUsersTable, (err) => {
    if (err) {
      console.error('Erro ao criar a tabela "users":', err.message);
    }
  });

  db.run(createSkillsTable, (err) => {
    if (err) {
      console.error('Erro ao criar a tabela "skills":', err.message);
    }
  });

  db.run(createFeaturesTable, (err) => {
    if (err) {
      console.error('Erro ao criar a tabela "features":', err.message);
    }
  });

  db.run(createContatoTable, (err) => {
    if (err) {
      console.error('Erro ao criar a tabela "contato":', err.message);
    }
  });

  db.run(createProjetosTable, (err) => {
    if (err) {
      console.error('Erro ao criar a tabela "projetos":', err.message);
    }
  });

  db.run(createProjetosSkillsTable, (err) => {
    if (err) {
      console.error('Erro ao criar a tabela "projetos_skills":', err.message);
    }
  });

  
  db.close();
};

async function getAllData(tableName) {
  const db = connect();  
  const query = `SELECT * FROM ${tableName}`;
  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(new Error(`Erro ao acessar a tabela ${tableName}: ${err.message}`));
      } else {
        resolve(rows);
      }
    });
    db.close();  
  });
}

async function getAllUsers() {
  const db = connect();  
  const tableName = "users";
  const query = `SELECT * FROM ${tableName}`;
  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(new Error(`Erro ao acessar a tabela ${tableName}: ${err.message}`));
      } else {
        resolve(rows);
      }
    });
    db.close();  
  });
}

async function getAllSkills() {
  const db = connect();  
  const tableName = "skills";
  const query = `SELECT * FROM ${tableName}`;
  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(new Error(`Erro ao acessar a tabela ${tableName}: ${err.message}`));
      } else {
        resolve(rows);
      }
    });
    db.close();  
  });
}

async function getAllContato() {
  const db = connect();  
  const tableName = "contato";
  const query = `SELECT * FROM ${tableName}`;
  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(new Error(`Erro ao acessar a tabela ${tableName}: ${err.message}`));
      } else {
        resolve(rows);
      }
    });
    db.close();  
  });
}

async function getAllFeatures() {
  const db = connect();  
  const tableName = "features";
  const query = `SELECT * FROM ${tableName}`;
  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(new Error(`Erro ao acessar a tabela ${tableName}: ${err.message}`));
      } else {
        resolve(rows);
      }
    });
    db.close();  
  });
}

async function getAllProjetos() {
  const db = connect();  
  const tableName = "projetos";
  const query = `SELECT * FROM ${tableName}`;
  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(new Error(`Erro ao acessar a tabela ${tableName}: ${err.message}`));
      } else {
        resolve(rows);
      }
    });
    db.close();  
  });
}

async function getAllProjetosSkills() {
  const db = connect();  
  const tableName = "projetos_skills";
  const query = `SELECT * FROM ${tableName}`;
  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(new Error(`Erro ao acessar a tabela ${tableName}: ${err.message}`));
      } else {
        resolve(rows);
      }
    });
    db.close();  
  });
}

createTables();

module.exports = {
  getAllData,
  getAllUsers,
  getAllSkills,
  getAllContato,
  getAllFeatures,
  getAllProjetos,
  getAllProjetosSkills
};
