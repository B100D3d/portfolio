import { ApolloServer, gql, ApolloError } from "apollo-server-micro"
import Comment from "@db/Models/Comment"
import CommentService from "@db/Models/CommentService"
import LikeService from "@db/Models/LikeService"
import Like from "@db/Models/Like"
import { ApolloContext, CommentQuery, DislikeQuery, LikeQuery } from "@types"

const typeDefs = gql`
    type Query {
        comments: [Comment!]!
        likes: Int
    }

    type Mutation {
        newComment(nickname: String!, text: String!): Comment!
        like(nickname: String!): Like
        dislike(id: String!): Int
    }

    type Comment {
        id: String!
        nickname: String!
        text: String!
    }

    type Like {
        id: String!
    }
`

const resolvers = {
    Query: {
        async comments() {
            try {
                const comments = await CommentService.getAllComments()
                return comments.map((comment) => comment.toJson())
            } catch (e) {
                console.log(e)
                throw new ApolloError("Internal Error", "500")
            }
        },
        async likes() {
            try {
                return LikeService.getLikesCount()
            } catch (e) {
                console.log(e)
                throw new ApolloError("Internal Error", "500")
            }
        },
    },
    Mutation: {
        async newComment(
            _: any,
            args: CommentQuery,
            { ip, userAgent }: ApolloContext
        ) {
            try {
                const comment = new Comment({
                    ...args,
                    ip,
                    userAgent,
                })
                await comment.save()
                return comment.toJson()
            } catch (e) {
                console.log(e)
                throw new ApolloError("Internal Error", "500")
            }
        },
        async like(_: any, args: LikeQuery, { ip, userAgent }: ApolloContext) {
            try {
                const like = new Like({
                    ...args,
                    ip,
                    userAgent,
                })
                await like.save()
                return like.toJson()
            } catch (e) {
                console.log(e)
                throw new ApolloError("Internal Error", "500")
            }
        },
        async dislike(_: any, { id }: DislikeQuery) {
            try {
                const like = await LikeService.getById(id)
                await like.remove()
                return LikeService.getLikesCount()
            } catch (e) {
                console.log(e)
                throw new ApolloError("Internal Error", "500")
            }
        },
    },
}

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        return {
            ip: req.connection.remoteAddress,
            userAgent: req.headers["user-agent"],
        }
    },
})
export default apolloServer.createHandler({ path: "/api/reviews" })

export const config = {
    api: {
        bodyParser: false,
    },
}
