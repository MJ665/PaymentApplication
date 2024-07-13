import { NextResponse } from "next/server"
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "asdww222wwww",
            name: "adsads"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}