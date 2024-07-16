import { NextResponse } from "next/server";
// import {PrismaClient} from "@repo/db/client"
import {client} from "@repo/db/client"


export const GET  = async () =>{
    await client.user.create({
        data:{
            email:"333",
            name:"3333"
        }
    })
    return NextResponse.json({msg:"we got and processed your request successfully"})
}