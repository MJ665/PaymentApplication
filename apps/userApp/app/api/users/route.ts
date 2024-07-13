import { NextResponse } from "next/server"
import {PrismaClient} from "@repo/db/client"




const client = new PrismaClient()

export const GET = async () =>{
    await client.user.create({
        data : {
            email :"email234",name:"this is name"
        }
    })
    return NextResponse.json({msg:"hi there created successfully new user"})
}