import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  image: { type: String },
  rating: { type: Number },
}, {
  timestamps: true,
})

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  area: { type: String, required: true },
  address: { type: String, required: true },
  postcode: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  categories: { 
    type: [ String ],
    required: true,
    validate: [
      { validator: (types) => types.length > 0, msg: 'You must have at least 1 type!' }
    ],
  },
  rating: { type: Number, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  reviews: [reviewSchema],
})

export default mongoose.model('Place' , placeSchema)