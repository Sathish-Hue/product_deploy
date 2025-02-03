const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())
app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://Sathish:sathish120@my-project-cluster.7imyr.mongodb.net/?retryWrites=true&w=majority&appName=My-Project-Cluster')
    .then(()=> console.log('Database connected..!'))
    .catch((err) => console.log(err))

app.use("", productRouter);

console.log("new things")

app.get('/', (req, res)=>{
    res.send('server reacted...')
})
