import { Router } from "express"
import { signUp,logOut,logIn, forgotPassword,resetPassword,resendOtp ,getCurrentUser} from "../controllers/user.controller.js"
import { verifyJwt } from "../middlewares/auth.middleware.js"
import { verifyOTP } from "../controllers/user.controller.js"

const router = Router()

// UN SECURE ROUTES
router.route("/SignUp").post(signUp)
router.route("/login").post(logIn)
router.route("/Forgot-Password").post(forgotPassword)


//secure routes
router.route("/logout").post(verifyJwt, logOut)
router.route("/resend-otp").post(verifyJwt, resendOtp);
router.route("/me").post(verifyJwt,getCurrentUser);
router.route("/Reset-Password/:resetPasswordToken").post(resetPassword)
router.route("/email-verify").post(verifyJwt,verifyOTP)

export default router