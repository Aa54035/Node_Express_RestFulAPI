import {AddnewContact,getNewContact} from '../controllers/crmController'

const routes = (app) => {
    app.route('/Contact')
        .get((req, res, next) => {

            //Adding middler ware using next function so once (req,res) function compelted next execute
            console.log(`request form is ${req.originalUrl}`)
            console.log(`request form is ${req.method}`)
            next();
              //next will excute (req,res)  function  next function 
        }, 
        // (req, res,next) => {
        //     res.send(`Get requests  has been successfull for /contact on 3300 port `);
        //         next();    
        // },
        getNewContact
        )
         
        .post(AddnewContact);
        //This will save all contact to mongo DB 
 

    app.route('/contact/:contactid')
        .put((req, res) => {
            res.send(`put  requests has been successfull for /contact/:contactid on 3300 port `)
        })
        .delete((req, res) => {
            res.send(`delete  requests has been successfull for /contact/:contactid on 3300 port `)
        });




}

export default routes;