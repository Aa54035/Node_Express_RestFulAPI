const routes = (app) =>{
    app.route('/contact')
    .get((req,res)=>{
        res.send(`Get requests  has been successfull for /contact on 3300 port `);
    })
    .post((req,res)=>{
        res.send(`Post request  has been successfull for /contact on 3300 port `);
    });

    app.route('/contact/:contactid')
    .put((req,res)=>{
        res.send(`put  requests has been successfull for /contact/:contactid on 3300 port `)
    })
    .delete((req,res)=>{
        res.send(`delete  requests has been successfull for /contact/:contactid on 3300 port `)
    });

    


}

export default routes;