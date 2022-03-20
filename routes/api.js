const express = require('express')
const router = express.Router()
const Record = require('../models/schema')


// Asynchronous GET Request to fetch ALL RECORDS in the DB

router.get('/', async (req, res) => {
    try {
        const records = await Record.find()
        res.json(records)
    } catch (error) {
        res.send('ERROR: ' + error)
    }
})


// Asynchronous GET Request to fetch INDIVIDUAL RECORD in the DB by RECORD ID

router.get('/:id', async (req, res) => {
    try {
        const records = await Record.findById(req.params.id)
        res.json(records)
    } catch (error) {
        res.send('ERROR: RECORD ID NOT FOUND: ' + error)
    }
})


// Asynchronous POST Request to create individual RECORD in the DB

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
        res.send('ERROR: UNABLE TO PROCESS RECORD' + error)
    }
})



// Asynchronous PATCH Request to update individual RECORD in the DB by RECORD ID

router.patch('/:id', async (req, res) => {
    try {
        const record = await Record.findById(req.params.id)
        record.firstName = req.body.firstName
        record.lastName = req.body.lastName
        record.age = req.body.age
        record.warrantyType = req.body.warrantyType
        record.activeWarranty = req.body.activeWarranty
        record.vendorId = req.body.vendorId
        const r1 = await record.save()
        res.json(r1)
    } catch (error) {
        res.send('ERROR: RECORD ID NOT FOUND: ' + error)
    }
})


// Asynchronous DELETE Request to remove INDIVIDUAL RECORD in the DB by RECORD ID

router.delete('/:id', async (req, res) => {
    try {
        const record = await Record.findById(req.params.id)
        const r1 = await record.remove()
        res.send(`${record} THIS RECORD HAS BEEN REMOVED FROM THE DATABASE`)
    } catch (error) {
        res.send('ERROR: RECORD ID NOT FOUND IN DATABASE: ' + error)
    }
})


module.exports = router


