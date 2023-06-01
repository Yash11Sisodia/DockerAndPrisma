import { PrismaClient} from "@prisma/client";

import express, { Request, Response } from "express";

const prisma = new PrismaClient();




export const getProducts= async (req:Request, res:Response) => {
const Quantity = req.params.Quantity
const Price =req.params.Price;
console.log(typeof Price)
console.log(Price)
let product: any;
try {
    product = await prisma.product.findMany({
    where : {
        Quantity : Quantity === null ? undefined : parseInt(Quantity) ,
        Price : Price === null ? undefined : parseInt(Price,0) 
    }
}) 
return res.status(200).json(product);

} catch(err) {
    console.log(err)
    return res.status(500).json({messahe : "internal Error"});
}

}

export const createProduct= async (req:Request, res:Response) => {

const {Name ,Quantity,Price} = req.body;
let product: any;


try {
 let    productold = await prisma.product.findUnique({
        where: {
            Name : Name
        }
    })
    if (!Name  ) {
        return res.status(400).json({message : "Not A Valid req"});
    }
    if (!Quantity ) {
        return res.status(400).json({message : "Not A Valid req"});
    }
    if (!Price ) {
        return res.status(400).json({message : "Not A Valid req"});
    }
    
    if (productold) {
       return res.status(400).json({message : "Product Alreday exist"});
    }
    
 product = await prisma.product.create({
    data : {
         Name : Name ,
         Quantity: Quantity === null || Quantity === undefined? 0 : parseInt(Quantity) ,
         Price : Price === null ||Price === undefined ? 0 : parseInt(Price) 
    }
});
return res.status(200).json(product);

} catch(err) {


    res.status(500).json({messahe : "internal Error"});
}


}

export const updateProduct= async  (req:Request, res:Response) => {

    const {Name ,Quantity,Price} = req.body

    let product: any;

    try {

    product = await prisma.product.update({
     where : {
          Name : Name
        },
        data : {
            Name : Name === null ? undefined : Name,
            Quantity: Quantity === null ? undefined : parseInt(Quantity) ,
            Price : Price === null ? undefined : parseInt(Price,0) 
        }

     });
     res.status(200).json(product);

    } 
    
    catch(err) {
        res.status(500).json({messahe : "internal Error"});
    }
    

    }

    