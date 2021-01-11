import mongoose from 'mongoose';
const { Schema } = mongoose;

const mobileSchema = mongoose.Schema({
    mobileBrand: String, 
    batterySize: Number, 
    screenSize: Number, 
    colour: String
})

const MobileInfo = mongoose.connect('MobileInfo', mobileSchema);

export default MobileInfo;