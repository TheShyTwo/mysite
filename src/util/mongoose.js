module.exports = {
    mongooseToObject: mongoose => {
        return mongoose.toObject()
    },
    multipleMongooseToObject: mongooseArray => {
        return mongooseArray.map(mongoose => mongoose.toObject())
    }
}