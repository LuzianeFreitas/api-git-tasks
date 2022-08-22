const { ApolloServer } = require('apollo-server')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { typeDefs, resolvers } = require('./src/graphql')
const GitHubService = require('./src/services/GitHub.service')
const UserRegisterService = require('./src/services/UserRegisterService')
const TasksRegisterService = require('./src/services/TasksRegisterService')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new ApolloServer({ 
    schema,
    dataSources: () => ({
        gitHubService: GitHubService,
        userRegisterService: UserRegisterService,
        tasksRegisterService: TasksRegisterService
    })
})

server.listen().then(({ url }) => console.log(url))