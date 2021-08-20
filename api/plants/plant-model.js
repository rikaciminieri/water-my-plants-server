const db = require('../../data/db-config')

const getAll = () => {
    return db('plants')
}

const getById = (plant_id) => {
    return db('plants').where({plant_id}).first()
}

const getByCat = (category) => {
    return db('plants').where({category}).first()
}

const insert = async (article) => {
    const [id] = await db('plants').insert(article)
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
    getByCat,
    insert,
    update,
    remove
}