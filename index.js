const express = require('express')
const app = express()
const fs= require('fs')
const cors = require('cors')
app.use(cors())
app.get('/',(req,res)=>{
 fs.readFile('C:/Users/Sufiyan/Documents/Node.js project/Nexaweave/data.json',(err,data)=>{
    if(err)console.log(err);
  //  res.json(data)
  try{
      const cust =JSON.parse(data);
      res.send(cust)
  }catch(err){
      console.log(err)
      res.send('erer')
  }
})

})
app.get('/s',(req,res)=>{
  res.send('ddf')
})

app.listen(5000)