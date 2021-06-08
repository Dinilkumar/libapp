const express = require('express');
const addauthorRouter =express.Router();
const Authordata =require('../model/authordata');
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    
    //destination of files
    destination:function(request,file,callback){
        callback(null,'./public/uploads/images');

    },

    //add back the extension
    filename:function(request,file,callback){
        callback(null,Date.now() + file.originalname);

    },
});

const upload = multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*3
    },
});
function router(nav)
{
          
    addauthorRouter.get('/',function(req,res){
            res.render("addauthor",{
                nav,
                title:'Library'
                
            })
        });
    
    //Insert author Details
    addauthorRouter.post('/add',upload.single('image'),function(req,res){
       var item ={
        author :  req.body.author,
        book    : req.body.book,
        gener : req.body.genere,
        publisher: req.body.publisher,
        image:  req.file.filename
   
      }
     var author = Authordata(item);
      author.save(); //saving to database;
      res.redirect('/authors');
    });   
    


        // edit author details
    addauthorRouter.get('/update/:id',function(req,res)
    {
        const id = req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('updateauthor',{
                nav,
                title:'Library',
                author
            });
        })
    });

    addauthorRouter.post('/updateauthor',upload.single('image'),function(req,res)
    {
        var id = req.body.id;
        var new_image ='';

        if(req.file)
        {
            
            new_image = req.file.filename;
            try{
                fs.unlinkSync("./uploads/images/"+ req.body.old_image);
            }
            catch(err){
                console.log(err);

            }
        }
        else
        {   
            new_image = req.body.old_image; 
        }
    

    Authordata.findByIdAndUpdate(id,{
        author :  req.body.author,
        book: req.body.book,
        gener : req.body.genere,
        publisher: req.body.publisher,
        image: new_image 

    },(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    });
        res.redirect('/authors'); 
    });


// Delete author details

addauthorRouter.get('/delete/:id',(req,res)=>{
    let id = req.params.id;
    Authordata.findByIdAndRemove(id,(err,result)=>{
        if(result.image != ''){
            try{
                fs.unlinkSync("./uploads/images/"+result.image);
            }
            catch(err){
                console.log(err);
            }
        }
        if(err){
            console.log('Erron occured');
        }
        else{
            console.log('Author detailes deleted;')
        };
        res.redirect("/authors");

    });

});
        return addauthorRouter;
}

   module.exports = router;