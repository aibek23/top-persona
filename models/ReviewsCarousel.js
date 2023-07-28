const {Schema, model, Types} = require('mongoose')

const ReviewsCarousel = new Schema({
  image : {type: String, required: true},
  name:{type: String, required: true},
  description : {type: String, required: true},
  reating:{type: Number, required: true},
  date: {type: Date, default: Date.now}
})

module.exports = model('ReviewsCarousel', ReviewsCarousel)