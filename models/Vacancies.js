const {Schema, model, Types} = require('mongoose')

const Vacancies = new Schema({
  imageSrc : {type: String, required: true},
  title:{type: String, required: true},
  description : {type: String, required: true},
  salary:{type: String, required: true},
  keyword:{type: String, required: true},
  date: {type: Date, default: Date.now},
})

module.exports = model('Vacancies', Vacancies)