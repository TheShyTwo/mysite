const mongoose = require('mongoose')

async function connect(next) {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev')
        console.log('Connect to db successfully !')
    } catch (err) {
        console.log('Connect to db false !')
        next(err)
    }
}

module.exports = {connect}