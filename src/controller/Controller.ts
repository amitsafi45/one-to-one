import { NextFunction, Request, Response } from "express";
import Service from "../service/Service";
//import errormsg from '../errorMessage/error.Message'
export default class Controller {
     static userController=async(req:Request,res:Response,next:NextFunction)=>{
      try{  
       const result=await Service.userService(req.body)
        res.send({result})
      } catch(error:any){
         console.log(error.message)
         //next({status:errormsg[error.message].status,message:errormsg[error.message].message})
         next(error)
      }
     }
     static profileController=async(req:Request,res:Response,next:NextFunction)=>{
       try{ 
       const result=await Service.profileService(req.body)
        res.status(200).send({result})
       }catch(error){
         next(error)
       }
     }
     static userProfile=async(req:Request,res:Response,next:NextFunction)=>{
      try{  
      const result=await Service.userProfile(req.body)
         res.status(200).send({result})
      }catch(error){
         next(error)         
      }
        //res.send(result)
     }

}
