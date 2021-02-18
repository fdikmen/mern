const mongoose=require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema(
    {
        authorId:{type:Schema.ObjectId,required:true},
        isbn:{type:String,required:true},
        title:{type:String,required:true},
        subtitle:{type:String,required:true},
        coAuthor:{type:String,required:true},
        published:{type:Date,default:Date.now},
        publisher:{type:String,required:true},
        pages:{type:Number,default:0},
        description:{type:String,required:true},
        website:{type:String,required:true}
    }
)

module.exports = mongoose.model('book',BookSchema)