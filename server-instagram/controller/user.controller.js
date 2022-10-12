const userModel = require("../models/user.model")
const picModel = require("../models/user.model")
const proModel = require("../models/user.model")
const cloudinary=require("cloudinary")
const SECRET = process.env.JWT_SECRET
const jwt = require('jsonwebtoken')
const { response } = require("express")
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
const getLandingPage = (req,res)=>{
    res.send({messages:[
        {name:"kunle",schoole:"SQI"},
        {name:"OLA",schoole:"SQI"}
    ]})
}
const registerUser = (req,res)=>{
    const newUser=req.body
    const email=req.body.email
    userModel.findOne({email:email},(err,user)=>{
        if(err){
            res.status(501).send({message:"Internal Server Eror",status:false})
        }else{
            const form = new userModel(newUser)
            form.save((err)=>{
                if(err){
                    console.log(`An Error Occured`)
                    res.status(501).send({message:"User signup failed.please try again later",status:false})
                }else{
                    res.send({message:"Registration Successful",status:true})
                }
            })
        }
    })
}
const profile = (req,res) =>{
    proModel.findOne(req.body,(err,res)=>{
        if(err){
            res.status(501).send({status:false, message:'Internal Server Error'});
        }else{
            if(result){
                res.send({status:true, message: 'Success', image: response.image})
            }
        }
    })
}

const setProfile = (req, res)=>{
    const sent = req.body;
    const file = req.body.myfile
    const token = req.body.token
    console.log(sent)
    cloudinary.v2.uploader.upload(file,
        {folder: 'Profile'},
        (err,result)=>{
            if(err){
                console.log(err)
                res.send({message: 'Upload failed'})
            }else{
                jwt.verify(token, SECRET, (err, userDetails)=>{
                    userModel.updateMany({email:userDetails.email},{$set:{file:result.secure_url}},
                        function(error,result1){
                            if(error){
                                console.log(error)
                            }else{
                                res.send({message: 'Upload successful', image:result.secure_url})
                            }
                        })
                })
            }
        })
}
const login = (req,res)=>{
    const password =req.body.password
    const email =req.body.email
    userModel.findOne({email:email},(err,user)=>{
        if(err){
            res.status(501).send({message:"Server Eror",status:false})
        }else{
            if(!user){
                res.send({message:"Error",status:false})  
            }else{
                user.validatePassword(password,(err,same)=>{
                    if(err){
                        console.log(`error dey`)
                    }else{
                        if(same){
                            const token = jwt.sign({email},SECRET,{expiresIn:"7h"})
                            console.log(token)
                            res.send({message:"Correct Password",status:true,token})
                        }else{
                            res.send({message:"Invalid Password",status:false})
                        }
                    }
                })
            }
        }
    })
}
const dashboard =(req,res)=>{
    const token =req.headers.authorization.split(' ')[1]  
    console.log(token)
    jwt.verify(token,SECRET,(err,result)=>{
        console.log(result)
      if(err){
            console.log(err)
            res.send({status:false,message:'unauthorized'})
        }else{
            userModel.findOne({email:result.email},(error,userDetails)=>{
                if(error){
                    res.status(501).send({status:false,message:'Internal server error'})
                }else{
                    res.send({status:true, message:'still valid',userDetails:userDetails})
                    console.log(result.email)
                }
            })
        }
    })
}
const uploadFile = (req,res)=>{
    console.log(req.body)
    // const sent =req.body;
    // const cap =req.body.caption;
    // const user =req.body.currentUser;
    // const file =req.body.myfile
    // cloudinary.v2.uploader.upload(file,{folder:'InstagramPost'},(err,result)=>{
    //     if(err){
    //         console.log(err)
    //         res.send({message:'upload failed'})
    //     }else{
    //         jwt.verify(req.body.token,SECRET,(err,userDetails)=>{
    //             if(err){
    //                 console.log(err)
    //             }else{
    //                 let email = userDetails.email
    //                 var form = new picModel({
    //                     created_at: new Date(),
    //                     image: result.secure_url,
    //                     userId:email,
    //                     caption:cap,
    //                     username: user
    //                 });
    //                 form.save((error,details)=>{
    //                     if(error){
    //                         console.log(error)
    //                         console.log('error')
    //                         res.send({message:'upload failed'})
    //                     }else{
    //                         res.send({message:'upload successful',image:result.secure_url})
    //                         console.log(details)
    //                     }
    //                 })
    //             }
    //         })
    //     }
    // }); 
}
const getAlluser = (req,res) =>{
    userModel.find((err,result)=>{
        if(err){
            console.log(err)
            res.send({status:false, message:'not found'})
        }else{
            res.send({status:true, message:'found', AllUser: result})
        }
    })
}
const getPost= (req,res)=>{
    picModel.find((err,pic)=>{
        if(err){
            console.log(err)
            res.status(501).send({status:false, message:'upload failed try again later'})
        }else{
            res.send({status:true, message:'still Valid', UserPic: pic})
        }
    })
}
module.exports={getLandingPage,registerUser,login,dashboard,uploadFile,getPost,getAlluser,setProfile,profile}