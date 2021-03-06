export interface BlockProps {
    id: string
    animate?: boolean
    willChange?: boolean
}

export interface Technology {
    icon: string
    name: string
}

export interface CommentQuery {
    nickname: string
    text: string
}

export interface LikeQuery {
    nickname: string
}

export interface DislikeQuery {
    id: string
}

export interface ApolloContext {
    userAgent: string
    ip: string
}
