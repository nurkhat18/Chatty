/*
  Name: Nurkhat Jumabaev
  Course Name: CSc337
  Description: this is server side code for 
  chatty project using nodejs.

*/

// importing needed modules
const express = require('express');
const app = express();


app.use(express.static(__dirname + "/public_html"));

app.get('/', (req, res) =>{
  res.end("hello 1");
})

app.listen(3000, ()=>{
  console.log('server is running')
})
