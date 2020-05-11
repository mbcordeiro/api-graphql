const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, {
            id
        }) {
            return await db('users').where({
                id
            }).first()
        },
        async getUser(_, {
            input
        }) {
            return await db('users')
        }
    },
    Mutation: {
        async cretaUser(_, {
            input
        }) {
            const resultado = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })
            const id = result[0]
            return await db('users').where({
                id
            }).first() 
        }
    }
}