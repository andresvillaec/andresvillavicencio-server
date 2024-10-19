import express from 'express';
import bodyParser from 'body-parser'
const app = express();
import userRoutes from './routes/products.js'

const PORT = 5000;

app.use(bodyParser.json());

app.use('/products', userRoutes);

app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'))

// app.get('/', (req, res));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));