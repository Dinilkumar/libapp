const express = require('express');
const authorsRouter =express.Router();
function router(nav){

    var authors = [
        {
        
            name :'Joseph Barbara',
            book :'Tome and Jerry',
            genre:'Carton',
            img:"Joseph Barbara.jpg"
        },
        {
            name :'J K Rowling',
            book :'Harry Porter',
            genre:'Fantacy',
            img:"J K Rowling.jpg"
        },
        {
            name:'Bhaseer',
            book :'pathumayudea Aadu',
            genre:'Drama',
            img:"Bhaseer.jpg"
        
        }   
        ]
        
        authorsRouter.get('/',function(req,res){
            res.render("authors",{
                nav,
                title:'Library',
                authors
            })
        })
        // booksRouter.get('/single',function(req,res){
        //             res.send("Hey i am a single book");
        // });
        
        authorsRouter.get('/:id',function(req,res){
            const id = req.params.id
            res.render('author',{
                nav,
                title:'Library',
                author:authors[id]
            })
        });

        return authorsRouter;
}


    module.exports = router;