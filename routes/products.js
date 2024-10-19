import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

// Mock database
let products = [];

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundProduct = products.find((product) => product.id === parseInt(id))

  res.send(foundProduct)
});


// Getting the list of products 
router.get('/', (req, res) => {
  res.send(products);
})

// Create a new product
router.post('/', (req, res) => {
  const product = req.body;
  const id = products.length + 1;

  products.push({ ...product, id: id });

  res.send(`${product.name} has been added to the Database`);
})

// Delete a product
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  products = products.filter((product) => product.id !== parseInt(id))

  res.send(`${id} deleted successfully from database`);
});

export default router