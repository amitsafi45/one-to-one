import { NextFunction, Request, Response } from "express";
import User from "../entity/User";
import Service from "../service/Service";
export default class Controller {
     static userController=async(req:Request,res:Response,next:NextFunction)=>{
      try{  
       // const data=req.body
       const result=await Service.userService(req.body)
        res.status(200).send({result})
      } catch(err:any){
         next(err)
      }
     }
     static profileController=async(req:Request,res:Response,next:NextFunction)=>{
       try{
         //console.log(req.file)
         const data={
          userbody:req.body,
          userpic:req.file
         }
         const obj=JSON.parse(JSON.stringify(data))
         //console.log(data)
       const result=await Service.profileService(obj)
        res.status(200).send({result})
       }catch(error){
         next(error)
       }
     }
     static userProfile=async(req:Request,res:Response,next:NextFunction)=>{
      try{ 
        const param:number=Number(req.params.id)
       console.log(req.params.id)
      const result=await Service.userProfile(param)
         res.status(200).send({result})
      }catch(error){
         next(error)         
      }
        
     }

}
