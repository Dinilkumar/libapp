const express = require('express');
const booksRouter =express.Router();
function router(nav){

    var books = [
        {
        
            title :'Tome and Jerry',
            author :'Joseph Barbara',
            genre:'Carton',
            img:"tom.jpg"
        },
        {
            title :'Harry Porter',
            author :'J K Rowling',
            genre:'Fantacy',
            img:"harry.jpg"
        },
        {
            title :'pathumayudea Aadu',
            author:'Bhaseer',
            genre:'Drama',
            img:"bhasheer.jpg"
        
        }   
        ]
        
        booksRouter.get('/',function(req,res){
            res.render("books",{
                nav,
                title:'Library',
                books
            })
        });
        // booksRouter.get('/single',function(req,res){
        //             res.send("Hey i am a single book");
        // });
        
        booksRouter.get('/:id',function(req,res){
            const id = req.params.id
            res.render('book',{
                nav,
                title:'Library',
                book:books[id]
            })
        });

        return booksRouter;
}


    module.exports = router;