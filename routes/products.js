import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

// Mock database
const products = [];

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

// Update an existing product
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const originalProduct = products.find((p) => p.id === parseInt(id));

  if (product) {
    Object.assign(originalProduct, product);
  }

  res.send(`${product.name} has been update in the Database`);
})

// Delete a product
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const index = products.findIndex((p) => p.id === parseInt(id));
  if (index !== -1) {
    products.splice(index, 1); // Remove the product at the found index
    res.send(`${id} deleted successfully from database`);
    return;
  }

  res.send(`${id} not found`);
});

export default router