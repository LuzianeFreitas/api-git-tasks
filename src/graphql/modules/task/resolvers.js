module.exports = {
    Query: {
        async tasks (_, __, { dataSources, user_id }) {
            return await dataSources.tasksRegisterService.getTasks(user_id)
        }
    },
    Mutation: {
        async createTask (_, { data }, { dataSources, user_id }) {
            return await dataSources.tasksRegisterService.createTask(user_id, data)
        },
        async deleteTask (_, { id }, { dataSources, user_id }) {
            return await dataSources.tasksRegisterService.deleteTask(user_id, id)
        }
    }
}