module.exports = {
    Query: {
        async tasks (_, __, { dataSources, user_id }) {
            return await dataSources.tasksRegisterService.getTasks(user_id)
        }
    }
}