import mongoose from 'mongoose'

const Schema = mongoose.Schema;



// export var Mongoosemodel = mongoose.model('Contact', {
//     firstname: String,
//     lastname: String,
//     email : String,
//     phonenumber : String
// });

export const contactSchema = new Schema
    ({
        firstName: {
            type: String,
            required: 'Enter a first name'
        },
        lastName: {
            type: String,
            required: 'Enter a last name'
        },
        email: {
            type: String
        },
        company: {
            type: String
        },
        phonenumber: {
            type: Number
        } 
    });
    