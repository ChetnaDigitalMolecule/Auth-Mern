import mongoose ,{Schema} from 'mongoose'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    username:{
        type:String,
        required:true ,
        unique:true,
        lowercase:true,
        trim:true,
      },
      email:{
        type:String,
        required:true ,
      },
      password:{
        type:String,
        required:true,
        minlength:6
      },
      refreshToken:{
        type:String
    },
    verified:{
type:Boolean,
default :false,
required:true,
    },

    resetPasswordToken: String,
		resetPasswordExpiresAt: Date,
		verificationToken: String,
		verificationTokenExpiresAt: Date,
},{timestamps:true})

userSchema.methods.generateAccessToken=function(){
  return jwt.sign({
    _id:this._id,
    username:this.username,
    email: this.email,
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  })
}
console.log( process.env.ACCESS_TOKEN_SECRET)

userSchema.methods.generateRefreshToken=function(){
  return jwt.sign({
    _id:this._id
  },
  process.env.REFRESH_TOKEN_SECRET,
  {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
  })
}
console.log( process.env.REFRESH_TOKEN_SECRET)





export const User = new mongoose.model("User",userSchema)
