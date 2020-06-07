import express from 'express';
import routes from './Source/routes/crmRoutes'

const app = express()
const port = 3300;

routes(app);
// pass express app

app.get('/',(req,res)=>{
    res.send(`node and express server is running on ${port}`);
})

app.listen(port,()=>{
    console.log(`your server is running on ${port}`);
})