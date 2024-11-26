import mongoose ,{Schema} from 'mongoose'
import jwt from 'jsonwebtoken'

const verificationTokenSchema = new Schema({
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  token:{
    type :String,
    required:true,

  },
  createdAt:{
    type:Date,
    expires:3600,
    default:Date.now()
  }
})

verificationTokenSchema.methods.generateVerificationToken = function () {
  const verificationToken = jwt.sign(
    { _id: this.owner },
    process.env.EMAIL_VERIFICATION_SECRET, 
    { expiresIn: '1h' }
  );
  this.token = verificationToken;
  return verificationToken;
};





export const VerificationToken = new mongoose.model("VerificationToken",verificationTokenSchema)
