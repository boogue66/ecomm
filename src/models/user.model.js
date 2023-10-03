import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // Para que no se incluya en las consultas por defecto
  },
  fullName: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  roles: {
    type: [String],
    enum: ['user', 'admin', 'super-user', 'god-user'], 
    default: ['user'],
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Nombre del modelo de productos
    },
  ],
},{versionKey:false});

export default mongoose.model('User', userSchema);
