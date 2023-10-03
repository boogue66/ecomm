import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req ,res) => {
    try {
        const { email, password, fullName  } = req.body;
        const passHash = await bcrypt.hash(password,10)
        const newUser = new User({ email, password: passHash, fullName });   
        const userSaverd = await newUser.save();
        res.status(201).json({
          message: 'Usuario registrado exitosamente',
          user: {
            id: userSaverd._id,
            name: userSaverd.fullName,
            email: userSaverd.email
          }, 
        });
      } catch (error) {
        console.error(error);
        if (error.code === 11000 && error.keyPattern.email === 1) {
            res.status(400).json({ message: 'El email ya fue registrado' });
          } else {
            console.error(error);
            res.status(500).json({ message: 'Error interno del servidor' });
          }
      }

}


export const login = (req ,res) =>{
    res.send('login')
}

export const checkAuthStatus = (req ,res) =>{
    res.send('login')
}