const db = require('../../data/db-config')

const getAll = () => {
    return db('plants')
}

const getById = (plant_id) => {
    return db('plants').where({plant_id}).first()
}

const getBySpecies = (species) => {
    return db('plants').where({}).first(species)
}

const insert = async (nickname) => {
const [id] = await db('plants').insert(nickname)
    return getById(id)
}

const update = async (plant_id , changes) => {
    await db('plants').where({plant_id}).update(changes)
    return getById(plant_id)
}

const remove = (plant_id) => {
    return db('plants').where({plant_id}).del()
}

module.exports = {
    getAll,
    getById,
    getBySpecies,
    insert,
    update,
    remove
}