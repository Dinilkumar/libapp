const mongoose =require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/library');
//mongoose.connect('mongodb+srv://dinil:dinil@dinilcluster.fyagv.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    author: String,
    book : String,
    gener : String,
    publisher : String,
    image : String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;