import bcrypt from "bcrypt"
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/genrateToken.js";
import validator from "validator";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const singup = async (req,res,next) => {
    const {username,email,password} = req.body;
    try {

        if(!validator.isEmail(email)){
          //  return res.status(400).json({msg:"email not valid "})
               return next({mesg:"email not valid"})
        }



        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
    
        const user = new User({
            username,
            email,
            password:hashedPassword,
        })
        if(user){
            const token = jwt.sign({ id:user._id }, process.env.Jwt_SECRET, {
                expiresIn: "1d",
        });
            await user.save();
            const { password: pass, ...rest } = user._doc;
            res
            .status(200)
            .cookie('jwt', token, {
              httpOnly: true,
            })
            .json(rest);
        }
        else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
   
}




export const login = async (req,res,next) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect ) {
             //   return res.status(400).json({ error: "Invalid username or password or email"})
                return next(errorHandler(400,"Invalid username or password or email") )
            }
       

        //generateTokenAndSetCookie(user._id,res)
        
        const token = jwt.sign({ id:user._id }, process.env.Jwt_SECRET, {
            expiresIn: "1d",
    });
      /* res.status(200).json({  some methods but all the same result
                _id: user._id,
                email:user.email,
                username: user.username,
                profilePic: user.profilePicture, });
       */
        const {password:pass,...rest} = user._doc;


        res.status(200).cookie('jwt',token,{
            httpOnly:true}).json(rest);
        

} catch (error) {
            next(error)
}

}


export const logout = (req, res,next) => {
    try {
            res.clearCookie("jwt").status(200).json({ message: "Logged out successfully" });
    } catch (error) {
            next(error)
    }
};


