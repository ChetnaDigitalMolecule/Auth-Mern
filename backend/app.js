import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import axios from "axios"


const app = express()

app.use(cors());

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
axios.interceptors.response.use(
    response => response, 
    error => {
      if (error.response && error.response.status === 401) {
        // Handle unauthorized access
        localStorage.removeItem('accessToken');
        navigate('/dashboard'); // Redirect to login
      }
      return Promise.reject(error);
    }
  );
  

app.get('/',(req,res)=>{
    res.send("hello")
})

import userRouter from './src/routes/user.route.js'
import Cookies from "cookies"
app.use("/api/v1/users",userRouter)






export { app }