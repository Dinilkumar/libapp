const express = require('express');
const loginRouter =express.Router();
function router(nav){

    // var books = [
    //     {
        
    //         title :'Tome and Jerry',
    //         author :'Joseph Barbara',
    //         genre:'Carton',
    //         img:"tom.jpg"
    //     },
    //     {
    //         title :'Harry Porter',
    //         author :'J K Rowling',
    //         genre:'Fantacy',
    //         img:"harry.jpg"
    //     },
    //     {
    //         title :'pathumayudea Aadu',
    //         author:'Bhaseer',
    //         genre:'Drama',
    //         img:"bhasheer.jpg"
        
    //     }   
    //     ]
        
        loginRouter.get('/',function(req,res){
            res.render("login",{
                nav,
                title:'Library'
                
            })
        });
        loginRouter.get('/signin',function(req,res){
            res.render("signin",{
                nav,
                title:'Library'
                
            })
        });
        // booksRouter.get('/single',function(req,res){
        //             res.send("Hey i am a single book");
        // });
        
        loginRouter.get('/:id',function(req,res){
            const id = req.params.id
            res.render('login',{
                nav,
                title:'Library'
            })
        });

        return loginRouter;
}


    module.exports = router;