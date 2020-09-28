import { CommentQuery } from "@types"
import { Timestamp } from "@google-cloud/firestore"
import Entity from "@db/Models/Entity"

export interface CommentState extends CommentQuery {
    ip: string
    userAgent: string
    id?: string
    timestamp?: Timestamp
}

export default class Comment extends Entity<CommentState> {
    protected readonly collectionName = "comments"

    constructor(state: CommentState) {
        super(state)
        this.state.id = state.id || Date.now().toString()
        this.state.timestamp = state.timestamp || Timestamp.now()
    }
}
