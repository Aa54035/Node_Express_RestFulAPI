import express from 'express';

const app = express()
const port = 3300;


app.get('/',(req,res)=>{
    res.send(`node and express server is running on ${port}`);
})

app.listen(port,()=>{
    console.log(`your server is running on ${port}`);
})