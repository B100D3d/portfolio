import Database from "@db/Models/Database"
import Comment, { CommentState } from "@db/Models/Comment"

export default class CommentService {
    static collectionName = "comments"

    static async getAllComments(): Promise<Array<Comment>> {
        const commentsSnapshot = await Database.getInstance()
            .getCollection(CommentService.collectionName)
            .orderBy("timestamp")
            .get()
        return commentsSnapshot.docs.map(
            (doc) => new Comment(doc.data() as CommentState, doc.id)
        )
    }
}
