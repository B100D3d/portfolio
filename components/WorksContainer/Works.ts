import { Technology } from "@types"

interface Work {
    name: string
    description: string
    url: string
    img: string
    technologies: Array<Technology>
}

const VUE: Technology = {
    name: "Vue",
    icon: "assets/technologies/vue.svg",
}
const VUEX: Technology = {
    name: "Vuex",
    icon: "assets/technologies/vuex.svg",
}
const REACT: Technology = {
    name: "React",
    icon: "assets/technologies/react.svg",
}
const REACT_CONTEXT: Technology = {
    name: "Context API",
    icon: "assets/technologies/react.svg",
}
const EXPRESS: Technology = {
    name: "Express.js",
    icon: "assets/technologies/express.svg",
}
const MONGODB: Technology = {
    name: "MongoDB",
    icon: "assets/technologies/mongodb.svg",
}
const TYPESCRIPT: Technology = {
    name: "Typescript",
    icon: "assets/technologies/typescript.svg",
}
const SASS: Technology = {
    name: "Sass",
    icon: "assets/technologies/sass.svg",
}
const GRAPHQL: Technology = {
    name: "GraphQL",
    icon: "assets/technologies/graphql.svg",
}
const MIND: Technology = {
    name: "Mind",
    icon: "assets/technologies/mind.svg",
}

const WORKS: Array<Work> = [
    {
        name: "TGMT",
        description: "Personal account for teachers and students",
        url: "тгмт.рф",
        img: "assets/works/tgmt.webp",
        technologies: [
            REACT,
            REACT_CONTEXT,
            EXPRESS,
            MONGODB,
            TYPESCRIPT,
            SASS,
            GRAPHQL,
            MIND,
        ],
    },
    {
        name: "SPYFALL",
        description: "Service to encrypt image-message in another image",
        url: "spyfall.devourer.ru",
        img: "assets/works/spyfall.webp",
        technologies: [VUE, VUEX, EXPRESS, TYPESCRIPT, SASS, MIND],
    },
]

export default WORKS
