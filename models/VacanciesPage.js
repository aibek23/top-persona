const { Schema, model, Types } = require('mongoose')

const VacanciesPage = new Schema({
  id: {type: String, required: true, unique: true},
  data: { type: String, default: '' },
  date: { type: Date, default: Date.now }
})

module.exports = model('VacanciesPage', VacanciesPage)