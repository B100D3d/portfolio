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

    getCollection(
        collectionName: string
    ): FirebaseFirestore.CollectionReference {
        return this.db.collection(collectionName)
    }

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}
