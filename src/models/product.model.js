import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Puedes usar un ObjectId de Mongoose como id
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: null,
  },
  slug: {
    type: String,
    unique: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  sizes: {
    type: [String],
  },
  gender: {
    type: String,
  },
  tags: {
    type: [String],
    default: [],
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductImage', // Nombre del modelo de imágenes de producto
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Nombre del modelo de usuarios
  },
});

export default mongoose.model('Product', productSchema);
