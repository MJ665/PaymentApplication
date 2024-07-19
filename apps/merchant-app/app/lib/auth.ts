import GoogleProvider from "next-auth/providers/google";
import {client} from "@repo/db/client";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async signIn({ user }:any) {
            try {
                const existingUser = await client.merchant.findUnique({
                    where: {
                        email: user.email
                    }
                });

                if (!existingUser) {
                    await client.merchant.create({
                        data: {
                            name: user.name,
                            email: user.email,
                            auth_type: "Google"
                        }
                    });
                }

                // Return true to indicate successful sign-in
                return true;
            } catch (e) {
                console.log(`Error during authentication with Google: ${e}`);
                return false; // Return false to indicate an unsuccessful sign-in
            }
        },
        async session({ session, token }:any) {
            if (session.user) {
                session.user.id = token.sub as string; // Ensure type safety
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id as string; // Ensure type safety
            }
            return token;
        }
    }
};
