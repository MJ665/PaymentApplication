import { NextResponse } from "next/server"
// import { PrismaClient } from "@repo/db/client";

import { client } from "@repo/db/client";
// const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "as99998888d",
            name: "a4564564dsads77777"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}