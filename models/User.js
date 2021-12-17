const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    LastName: {
        type: String,
    },
    role:{
        type:Number,
        default:0
    },
    email:{
        type:String,
        required:true,
    },
    password: {
        type: String,
        required: true,
      },
    F_job:[{
        type: Schema.Types.ObjectId,
         ref: 'Search_Ad'
    }],
    F_search:[{
        type: Schema.Types.ObjectId,
         ref: 'Work_Ad'
    }]
})

module.exports = User = mongoose.model("User", userSchema);
