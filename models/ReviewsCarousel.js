const {Schema, model, Types} = require('mongoose')

const ReviewsCarousel = new Schema({
  imageSrc : {type: String, required: true},
  title:{type: String, required: true},
  description : {type: String, required: true},

  date: {type: Date, default: Date.now}
})
ReviewsCarousel.index({ rating: 1 });

module.exports = model('ReviewsCarousel', ReviewsCarousel)