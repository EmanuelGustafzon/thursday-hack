const mongoose = require('mongoose');
import dotenv from 'dotenv';
dotenv.config();

let isConnected = false;
export const connectMongo = async () => {
    if(isConnected) {
        return
    }
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/thursday-hack', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log(error)
    }

}

