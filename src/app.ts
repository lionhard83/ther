import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.json('hello world');
});

app.listen(5001, () => {console.log('Server running')});