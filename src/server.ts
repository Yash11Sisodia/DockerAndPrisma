import express, { Request, Response } from 'express';
import {createProduct,updateProduct,getProducts} from './controller/product'

const app=express()

app.use(express.json());


app.patch("/updateProduct",updateProduct)
app.put("/createProduct",createProduct)
app.get("/getProduct/:Quantity/:Price",getProducts)


app.use("/",  (  req:Request, res:Response,) => {
 res.send("Hello API's Running")
})

app.listen(5000, () =>{
  console.log("server started")
})