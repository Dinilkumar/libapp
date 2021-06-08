const express = require('express');
const multer = require('multer');

const app = express();
const port =process.env.PORT || 4000;

// Define storage for the image



const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/signin',name:'Sign-up'
    },
    {
        link:'/login',name:'login'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
    }
    ];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signinRouter = require('./src/routes/signinRoutes')(nav);
const addbookRouter = require('./src/routes/addbookRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.use(express.static(__dirname));
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/admin',adminRouter);


app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signin',signinRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'

    });
});


app.listen(port,()=>{console.log("Server Ready at"+ port)});