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

app.listen(port, () => {
    console.log("API em funcionamento ! - Porta: " + port);
});
