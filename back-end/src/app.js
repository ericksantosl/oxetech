import express from 'express'
import 'dotenv/config'
import './routes.js'

const app = new express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

export{ app }

app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});