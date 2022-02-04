const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const faker = require('faker');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('hola mi server en express')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('hola soy una nueva ruta')
})

app.get('/categories/:categoryId/products/:productId', (req, res) =>{
  const { categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  })
})



/*app.get('users',(req,res) => {
  const { id } = req.query
})*/
app.get('/users',(req,res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send('No hay parametros')
  }
})




app.listen(port, () =>{
  console.log('Mi port' + port);
})
