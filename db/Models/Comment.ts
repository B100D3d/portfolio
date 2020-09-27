import Database from "@db/Models/Database"
import { CommentQuery } from "@types"
import { Timestamp } from "@google-cloud/firestore"

export interface CommentState extends CommentQuery {
    ip: string
    userAgent: string
    id?: string
    timestamp?: Timestamp
}

export default class Comment {
    private readonly state: CommentState

    constructor(state: CommentState) {
        this.state = state
        this.state.id = state.id || Date.now().toString()
        this.state.timestamp = state.timestamp || Timestamp.now()
    }

    toJson(): CommentState {
        return { ...this.state }
    }

    save(): Promise<FirebaseFirestore.DocumentData> {
        return Database.getInstance().CommentsCollection.add(this.state)
    }
}
