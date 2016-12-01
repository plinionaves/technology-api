import express from 'express';
const PORT = 3000;

const app = express();

app.set("json spaces", 4);

app.get('/', (req, res) => res.json({status: 'Technology API'}));

app.get('/technology', (req, res) => {
    res.json({
        tecnologies: [
            {technology: 'Node.js'},
            {technology: 'Express'},
            {technology: 'Angular2'},
            {technology: 'Babel'},
        ]
    });
});

app.listen(PORT, () => console.log(`Technology API rodando na porta ${PORT}...`));