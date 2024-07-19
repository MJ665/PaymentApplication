// import { NextResponse } from "next/server"
// // import { PrismaClient } from "@repo/db/client";

// import { client } from "@repo/db/client";
// // const client = new PrismaClient();

// export const GET = async () => {
//     await client.user.create({
//         data: {
//             email: "as99988898888d",
//             name: "a4564577764dsads77777"
//         }
//     })
//     return NextResponse.json({
//         message: "hi there"
//     })
// }

import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { NextResponse } from "next/server";

export const GET = async () => {
    const session = await getServerSession(authOptions);
    if (session?.user) {
        return NextResponse.json({
            user: session.user
        });
    }
    return NextResponse.json({
        msg: "Hey merchant, you are not logged in."
    }, {
        status: 403
    });
};
