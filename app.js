require("dotenv").config();

const port = process.env.PORT || 3000;
const cors = require('cors');
const express = require('express');
const app = express();

const db = require("./scripts/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.post('/AllData', async (req, res) => {
    const { name_table } = req.body;
    try {
        const data = await db.getAllData(name_table);
        res.json(data);
    } catch (err) {
        res.status(400).json({ err: 'Erro no processamento de requisição AllData!' })
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await db.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(400).json({ err: 'Erro no processamento de requisição users!' })
    }
})

app.get('/skills', async (req, res) => {
    try {
        const skills = await db.getAllSkills();
        res.json(skills);
    } catch (error) {
        res.status(400).json({ err: 'Erro no processamento de requisição users!' })
    }
})

app.get('/contato', async (req, res) => {
    try {
        const contato = await db.getAllContato();
        res.json(contato);
    } catch (error) {
        res.status(400).json({ err: 'Erro no processamento de requisição users!' })
    }
})

app.get('/features', async(req, res) => {
    try {
        const features = await db.getAllFeatures();
        res.json(features);
    } catch (error) {
        res.status(400).json({ err: 'Erro no processamento de requisição users!' })
    }
})

app.get('/projetos', async(req, res) => {
    try {
        const projetos = await db.getAllProjetos();
        res.json(projetos);
    } catch (error) {
        res.status(400).json({ err: 'Erro no processamento de requisição users!' })
    }
})

app.get('/projetosskills', async(req, res) => {
    try {
        const projetosskills = await db.getAllProjetosSkills();
        res.json(projetosskills);
    } catch (error) {
        res.status(400).json({ err: 'Erro no processamento de requisição users!' })
    }
})

app.listen(port, () => {
    console.log("API em funcionamento ! - Porta: " + port);
});
