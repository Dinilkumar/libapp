const express = require('express');
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
        
        signinRouter.get('/signin',function(req,res){
                res.render("signin",{
                nav,
                title:'Library'
            })
        });

        return signinRouter;
}


    module.exports = router;