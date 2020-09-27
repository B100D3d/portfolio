import admin from "firebase-admin"
import credentials from "@firestore-key.json"

const serviceAccount = credentials as admin.ServiceAccount
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    })
}

export default class Database {
    private static instance: Database
    private db = admin.firestore()

    CommentsCollection = this.db.collection("comments")
    LikesCollection = this.db.collection("likes")

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}
