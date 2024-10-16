import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    id: {
        type: String,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
    },
    shortCode:{
        type:String,
        required: true,
    },
    access:{
        type:Number,
        trim: true,
    }
}, {
    timestamps: true
})

urlSchema.set("toJSON", {
    virtuals: true, 
    versionKey: false, 
    transform: function(doc, ret){
        delete ret._id
    }
})

const URL = mongoose.model("Url", urlSchema)
export default URL