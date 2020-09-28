import { ApolloServer, gql, ApolloError } from "apollo-server-micro"
import Comment from "@db/Models/Comment"
import CommentService from "@db/Models/CommentService"
import { ApolloContext, CommentQuery } from "@types"

const typeDefs = gql`
    type Query {
        comments: [Comment!]!
    }

    type Mutation {
        newComment(nickname: String!, text: String!): Comment!
    }

    type Comment {
        id: String!
        nickname: String!
        text: String!
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
