import { Client,Databases,Account,Storage } from "appwrite";
import conf from "../conf/conf"

const client = new Client();

if (!conf.appwriteUrl) {
  throw new Error(
    "❌ Missing NEXT_PUBLIC_APPWRITE_URL in .env.local — please set it."
  );
}
if (!conf.appwriteProjectId) {
  throw new Error(
    "❌ Missing NEXT_PUBLIC_APPWRITE_PROJECT_ID in .env.local — please set it."
  );
}


client
       .setEndpoint(conf.appwriteUrl)
       .setProject(conf.appwriteProjectId);



 export const account = new Account(client)   
 export const databases = new Databases(client) 
 export const bucket = new Storage(client)  