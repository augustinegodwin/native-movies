import { CreateUserPrams, SignInParams } from "@/type"
import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite"

export const appwriteConfig={
    endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    platform:"com.boss.foodering",
    projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseId:"69611eb4003adf4b887e",
    userCollectionId:"user"
}
// create a appwrite client and export it to use anywhere
export const client=new Client()
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)

export const account=new Account(client)
export const databases=new Databases(client)
export const avatars=new Avatars(client)

export const createUser =async ({email,password,name}:CreateUserPrams)=>{
    try {
        const newAccount=await account.create(ID.unique(),email,password, name)
        const avatarUrl=avatars.getInitialsURL(name)
        if (!newAccount) throw Error
        await signIn({email,password})
        const newUser=await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(), 
            {
                accountId: newAccount.$id,
                name,email,avatar:avatarUrl
            }
        )
        return newUser
    } catch (error) {
        throw new Error(error as string)
    }
}

export const signIn =async ({email ,password}:SignInParams)=>{
    try {
        const session =await account.createEmailPasswordSession(email,password)
    } catch (error) {
        throw new Error(error as string)
    }
}
export const getCurrentuser =async ()=>{
    try {
        
        const currentAccount =await account.get()
        if (!currentAccount) throw Error;
        // The users data
        const currentUser=await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId",currentAccount.$id)]
        )
        if (!currentUser) throw Error
        return currentUser.documents[0]
    } catch (error) {
        console.log(error)
        throw new Error(error as string)
    }
}