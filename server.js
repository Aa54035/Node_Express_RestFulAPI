import express from 'express';
import routes from './Source/routes/crmRoutes'
import mongoose from 'mongoose'
import bodyparse from 'body-parser'

const app = express()
const port = 3300;
const MongoUrl = 
//'mongodb+srv://user:user@mongoclustor-t0m10.mongodb.net/middleware?retryWrites=true&w=majority';
//'mongodb+srv://user:user@mongoclustor-t0m10.mongodb.net/middleware.middleware?retryWrites=true&w=majority';
'mongodb+srv://user:user@mongoclustor-t0m10.mongodb.net/middleware?retryWrites=true&w=majority';

mongoose.Promise = global.Promise
//This will tell mongoose to wait for result when we are connecting to mongo db 

mongoose.connect(MongoUrl, {
    useNewUrlParser : true  , useUnifiedTopology : true
},()=>{
    console.log('mong db connection successful ')
});




// create Body parser setup to handle JAson 
//allow app to parse request in jason 
app.use(bodyparse.urlencoded({enxtended : true }))
app.use(bodyparse.json())

routes(app);
// pass express app

app.get('/',(req,res)=>{
    res.send(`node and express server is running on ${port}`);
})

app.listen(port,()=>{
    console.log(`your server is running on ${port}`);
})