const Plant = require('./plant-model')

const checkPlantId = (req, res, next) => {
    const { id } = req.params;
    Plant.getById(id)
    .then( plants => plants ? next() : res.status(404).json({ message: `plant with id: ${id} not found` }) )
    .catch( err => console.log(err) )
}





const validatePlant = (req, res, next) => {
const { species , h2oFrequency} = req.body
 if( !species || species === '' || typeof species !== 'string' ) {
        res.status(400).json({ message: 'invalid species' })
} else if ( !h2oFrequency || h2oFrequency === '' || typeof h2oFrequency !=='string' ) {
        res.status(400).json({ message: 'invalid  watering frequency' })
} else {
        next()
}}

module.exports = {
    checkPlantId,
    validatePlant,
}