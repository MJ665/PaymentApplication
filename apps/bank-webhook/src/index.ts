import express from "express";
import db from "@repo/db/client"
const app = express();

app.post("/hdfcWebhook", (req, res) => {
    //TODO: Add zod validation here?
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    db.balance.update({
        where:{
            userId:useId
        },
        data:{
            amount:{
                increment:paymentInformation.amount
            }
        }
    })
    db.onRampTransaction.update({
        where:{
            token:paymentInformation.token,
        },data:{
            status:"Success"
        }
    })
    res.status(411).json({
        message:"captured"
    })
    // Update balance in db, add txn
})