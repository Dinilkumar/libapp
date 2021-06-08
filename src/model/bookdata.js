const mongoose =require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/library');
//mongoose.connect('mongodb+srv://dinil:dinil@dinilcluster.fyagv.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author : String,
    gener : String,
    publisher : String,
    image : String
});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;