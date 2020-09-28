import Database from "@db/Models/Database"
import Like, { LikeState } from "@db/Models/Like"

export default class LikeService {
    static collectionName = "likes"

    static async getLikesCount(): Promise<number> {
        const commentsSnapshot = await Database.getInstance()
            .getCollection(LikeService.collectionName)
            .get()
        return commentsSnapshot.docs.length
    }

    static async getById(id: string): Promise<Like> {
        const likeSnapshot = await Database.getInstance()
            .getCollection(LikeService.collectionName)
            .doc(id)
            .get()
        return new Like(likeSnapshot.data() as LikeState, id)
    }
}
