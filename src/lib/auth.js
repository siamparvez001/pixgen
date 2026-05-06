import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// dns.setDefaultResultOrder("ipv4first")
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("pixgen");

export const auth = betterAuth({
    database: mongodbAdapter(db, {

        client
    }),
    trustedOrigins: ["http://localhost:3000", "https://pixgen-black.vercel.app"],
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }
    }
});
