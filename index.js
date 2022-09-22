const { ApolloServer } = require('apollo-server')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { typeDefs, resolvers } = require('./src/graphql')
const config = require('./src/config')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new ApolloServer({ 
    schema,
    ...config
})

server.listen().then(({ url }) => console.log(url))