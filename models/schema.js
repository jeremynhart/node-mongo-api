const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    warrantyType: {
        type: String,
        required: true
    },
    activeWarranty: {
        type: Boolean,
        required: true,
        default: false
    },
    vendorId: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('Record', dataSchema)