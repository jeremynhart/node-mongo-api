const express = require('express')
const router = express.Router()
const Record = require('../models/schema')

router.get('/', async (req, res) => {
    try {
        const records = await Record.find()
        res.json(records)
    } catch (error) {
        res.send('ERROR: ' + error)
    }
})

router.post('/', async (req, res) => {

    const record = new Record({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        warrantyType: req.body.warrantyType,
        activeWarranty: req.body.activeWarranty,
        vendorId: req.body.vendorId        
    })
    try {
        const r1 = await record.save()
        res.json(r1)
    } catch (error) {
        res.send('ERROR: ' + error)
    }
})


module.exports = router


