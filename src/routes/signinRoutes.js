const express = require('express');
const Userdata = require('../model/userdata');
const signinRouter =express.Router();
function router(nav){

  
    signinRouter.get('/',function(req,res){
            res.render("signin",{
                nav,
                title:'Library'
                
            })
        });
    
        // booksRouter.get('/single',function(req,res){
        //             res.send("Hey i am a single book");
        // });
        
        // signinRouter.get('/signin',function(req,res){
        //         res.render("signin",{
        //         nav,
        //         title:'Library'
        //     })
        // });

        signinRouter.post('/signin/save',function(req,res){
            var item ={
                username :  req.body.username,
                email    : req.body.email,
                phone : req.body.phone,
                password: req.body.con_pass,
             
        
           }
          var user = Userdata(item);
           user.save(); //saving to database;
           res.redirect('/login');
         });   
         

        return signinRouter;
}


    module.exports = router;