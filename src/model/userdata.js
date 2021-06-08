const mongoose =require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/library');
//mongoose.connect('mongodb+srv://dinil:dinil@dinilcluster.fyagv.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email : String,
    phone : Number,
    password : String
});

var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;