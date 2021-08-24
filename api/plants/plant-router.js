const router = require('express').Router()
const Plant = require('./plant-model')
const {validatePlant , checkPlantId} = require('./plant-middleware')





router.get('/', (req, res) => {
Plant.getAll()
    .then( plants => res.status(200).json(plants) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'Could not get plants' })
})
})





router.get('/:id', checkPlantId, (req, res) => {
const { id } = req.params
Plant.getById(id)
    .then( plants => res.status(200).json(plants) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'Could not get specified plant' })
})
})





router.post('/', validatePlant, (req, res) => {
Plant.insert(req.body)
    .then( newPlant => res.status(201).json(newPlant) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'Could not post new plant' })
})
})





router.put('/:id', checkPlantId , validatePlant, (req, res) => {
Plant.update(req.params.id , req.body)
    .then( updatedArticle => res.status(200).json(updatedArticle) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'Could not update the plant' })
})
})





router.delete('/:id', checkPlantId, (req, res) => {
Plant.remove(req.params.id)
    .then( removed => removed ?  res.json(req.body) : res.status(404) )
    .catch( err => {
        console.log(err)
        res.status(500).json({ message: 'Could delete specified plant' })
})
})
module.exports = router;
