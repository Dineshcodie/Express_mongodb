const mongoose= require('mongoose')
const bookSchema=new mongoose.Schema(
    {
        "Bookname":String,
        "Price":Number,
        "Author":String
    }
)
module.exports=mongoose.model('book',bookSchema)