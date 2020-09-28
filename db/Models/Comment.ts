import { CommentQuery } from "@types"
import Entity, { EntityState } from "@db/Models/Entity"
import CommentService from "@db/Models/CommentService"

export interface CommentState extends CommentQuery, EntityState {
    ip: string
    userAgent: string
}

export default class Comment extends Entity<CommentState> {
    constructor(state: CommentState, id?: string) {
        super({ state, id, collectionName: CommentService.collectionName })
    }
}
