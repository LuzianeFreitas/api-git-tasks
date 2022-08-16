const { ApolloServer } = require('apollo-server')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { typeDefs, resolvers } = require('./src/graphql')
const GitHubService = require('./src/services/GitHub.service')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new ApolloServer({ 
    schema,
    dataSources: () => ({
        gitHubService: GitHubService
    })
})

server.listen().then(({ url }) => console.log(url))