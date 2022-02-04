const express = require('express');
const faker = require('faker');

app.get('/products/filter',(req,res) => {
  res.send('Hola soy un endpoint especifico,siempre debo estar antes de un endpoint dinamico')
})


app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(
  {
    id,
    name: 'product 1',
    price: 3
  })
})
app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      Image: faker.image.imageUrl(),
    })
  }
  res.json(products);
})
