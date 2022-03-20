const express = require('express')
const router = express.Router()
const Record = require('../models/schema')

router.get('/', async (req, res) => {
    try {
        const record = await Record.find()
        res.json(record)
    } catch (error) {
        res.send('ERROR: ' + error)
    }
})


module.exports = router


