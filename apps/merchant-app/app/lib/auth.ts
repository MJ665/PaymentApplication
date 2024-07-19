import {client} from "@repo/db/client"
import CredentialsProvider from "next-auth/providers/credentials"

import bcrypt from "bcrypt"


export const authOptions = {
    providers:[
        CredentialsProvider({
            name:"Credentials", 
            credentials:{
                phone:{label:"phone Numbert", type:"text", placeholder:"1231231231"},
                password:{label:"Password", type:"password"}
            },
            // TODO : User credentials type from next auth
            async authorize(credentials:any){
                // TODO : do zod validation here 
                const hashedPassword = await bcrypt.hash (credentials.password, 10)


                const existingUser = await client.user.findFirst({
                    where:{
                        number :credentials.phone
                    }
                });
                if(existingUser){
                    const passwordValidation = await bcrypt.compare(credentials.password , existingUser.password)
                    if (passwordValidation){
                        return {
                            id:existingUser.id.toString(), 
                            name :existingUser.name || "hello the email not exist",
                            email:existingUser.email || "hello Email not exist"
                        }
                    }
                    return null
                }
                try {
                    const user = await client.user .create({
                        data:{
                            number:credentials.phone,
                            password:hashedPassword
                        }
                    });
                    return {
                        id:user.id.toString(),
                        name :user.email, 
                        email:user.number
                    }
                }catch(e){
                    console.log(`hey we have got an error ${e}`)
                }
                return null
            }
            
        
        })
    ],
    secret:process.env.JWT_SECRET || "secret",
    callbacks:{
        // TODO :can you fis the type here ? using any is bad practice for this case
        async session ({token , session }:any){
            session.user.id = token.sub

            return session
        }
    }
}