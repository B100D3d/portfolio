import { LikeQuery } from "@types"
import Entity, { EntityState } from "@db/Models/Entity"
import LikeService from "@db/Models/LikeService"

export interface LikeState extends LikeQuery, EntityState {
    ip: string
    userAgent: string
}

export default class Like extends Entity<LikeState> {
    constructor(state: LikeState, id?: string) {
        super({ state, id, collectionName: LikeService.collectionName })
    }
}
