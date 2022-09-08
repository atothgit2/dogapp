import mongoose from 'mongoose';
const Schema = mongoose.Schema; // constructor

const dogSchema = new Schema({ // Schema defines the structure of document
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
  required: true
  },
  breed: String,
  adopted_at: Date,
  birth_date: Date,
}, {timestamps: true}); // auto-assigns created at and modified at timestamps

const Dog = mongoose.model('Dog', dogSchema) // Model surrounds Schema creating an interface to communicate ..., should be the singular of collection name!!!ű
export default Dog;