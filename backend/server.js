import express from 'express';
import data from './data';
import dotenv from 'dotenv'
import config from './config'
import mongoose from 'mongoose';
import userRoute from './routes/userRoute'

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use("/api/users", userRoute);

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if(product)
    res.send(product);
    else
    res.status(404).send({msg: " Product not found!"})
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => {console.log("server running on http://localhost:5000")})