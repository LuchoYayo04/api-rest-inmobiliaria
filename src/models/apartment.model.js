import mongoose from "mongoose";

const apartmentsSchema = new mongoose.Schema({
    nameApartment: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    filename: {
        type: String,
       // required: true,
        trim: true
    }
},{
    timestamps:true
})

export default mongoose.model("Apartment", apartmentsSchema)