import mongoose from 'mongoose'

import { contactSchema, Mongoosemodel } from '../dbmodels/crmModels';

const Contact = mongoose.model('Contact', contactSchema);

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
        console.log('we are in the add new contact function . success ' + req.body);

        res.json(contact)
    });
}


export const getNewContact = (req, res) => {

    Contact.find({}, (err, contact) => {

        if (err) {
            console.log('we are in the find  function . failure ');

            console.log(err);
            res.send(err)
        }
        console.log('we are in the find  function . success ');

        res.json(contact)

    })
};


export const findContact = (req, res) => {


    Contact.findById(req.params.contactid, (err, contact) => {

        if (err) {
            console.log('we are in the find  function . failure ');

            console.log(err);
            res.send(err)
        }
        console.log('we are in the find  function . success ');

        res.json(contact)

    })
};



export const updateContact = (req, res) => {


    Contact.findOneAndUpdate({ _id: req.params.contactid }, req.body,
        { new: true, useFindAndModify: false }
        // return updated new updated obj from DB  ..usefindmodify will not give any error 
        ,
        (err, contact) => {

            if (err) {
                console.log('we are in the find  function . failure ');

                console.log(err);
                res.send(err)
            }
            console.log('we are in the find  function . success ');

            res.json(contact)

        })
};



export const deleteConact = (req, res) => {


    Contact.remove({ _id: req.params.contactid }, (err, contact) => {

        if (err) {
            console.log('we are in the delete  function . failure ');

            console.log(err);
            res.send(err)
        }
        console.log('we are in the delete  function . success ');

        res.json({Message : `Conact with ${req.params.contactid} has been deleted successfully `})

    })
};
