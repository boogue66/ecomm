import mongoose from "mongoose";

export const conectarBD = async() =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecomm');
        console.log('BD conectada')
    } catch (error) {
        console.log(error);
    }
}