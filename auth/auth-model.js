const db = require('../../data/db-config')
const { getById } = require('../plants/plant-model')

const findAll = () => {
 return db("users")
}

const findBy = (filter) => {
    return db("users").where(filter)
}

const findById = (user_id) => {
    return db("users").where({user_id}).first()
}

const add = async (user) => {
    const [id] = await db('users').insert(user)
    return getById(id)
}

module.exports = {
    findAll,
    findBy,
    findById,
    add
}