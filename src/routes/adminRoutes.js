const { response } = require('express');
const express = require('express');
const adminRouter = express.Router();
const Bookdata =require('../model/bookdata');
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


function router(nav){
//addbook router
adminRouter.get('/',function(req,res){
    res.render("addBook",{
        nav,
        title:'Library'
    })
});


//Insert Book Details
adminRouter.post('/add',upload.single('image'),function(req,res){
 //  res.send("I am added");
 //console.log(request.file);
   var item ={
  title :  req.body.title,
   author: req.body.author,
    gener : req.body.genere,
    publisher: req.body.publisher,
  image:  req.file.filename

   }
  var book = Bookdata(item);
   book.save(); //saving to database;
   res.redirect('/books');


});
// edit book details
adminRouter.get('/update/:id',function(req,res)
{
    const id = req.params.id
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('updatebook',{
            nav,
            title:'Library',
            book
        });
    })
});

//Update book details.

adminRouter.post('/updatebook',upload.single('image'),function(req,res)
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
   

  Bookdata.findOneAndUpdate(id,{
    title :  req.body.title,
    author: req.body.author,
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
   res.redirect('/books'); 
});

// Delete book details

adminRouter.get('/delete/:id',(req,res)=>{
    let id = req.params.id;
    Bookdata.findByIdAndRemove(id,(err,result)=>{
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
            console.log('Book detailes deleted;')
        };
        res.redirect("/books");

    });

});
 
return adminRouter;
}
module.exports = router;

