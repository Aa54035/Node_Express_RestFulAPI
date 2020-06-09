import mongoose from 'mongoose'

import { contactSchema,Mongoosemodel } from '../dbmodels/crmModels';

const Contact  = mongoose.model('Contact',contactSchema);

//const Contact = mongoose.model('Contact', contactSchema);

export const AddnewContact = (req, res) => {
    let newcontact = new Contact(req.body);
   
    console.log(newcontact);
   

    newcontact.save((err, contact) => {
        if (err) {
            console.log('we are in the add new contact function . failure ');

            console.log(err);
            res.send(err)
        }
        console.log('we are in the add new contact function . success '+req.body );

       res.json(contact)
    });
}

