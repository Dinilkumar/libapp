const express = require('express');
const booksRouter =express.Router();
const Bookdata=require('../model/bookdata');
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
        
        booksRouter.get('/',function(req,res){
            Bookdata.find()
            .then(function(books){
                res.render("books",{
                    nav,
                    title:'Library',
                    books
                });
            })
          
        });

    
        // booksRouter.get('/single',function(req,res){
        //             res.send("Hey i am a single book");
        // });
        
        booksRouter.get('/:id',function(req,res){
            const id = req.params.id
            Bookdata.findOne({_id:id})
            .then(function(book){
                res.render('book',{
                    nav,
                    title:'Library',
                    book
                });
            })
           
        });

        return booksRouter;
}


    module.exports = router;