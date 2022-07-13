import { Request, Response } from "express";
import Service from "../service/Service";
export default class Controller {
     static userController=(req:Request,res:Response)=>{
        const result=Service.userService(req.body)
        res.json({
            result:result
        })
     }
     static profileController=(req:Request,res:Response)=>{
        const result=Service.profileService(req.body)
        res.json({
            result:result
        })
     }
     static userProfile=(req:Request,res:Response)=>{
        const result=Service.userProfile(req.body)
        res.status(200).json({
            message:"okay",
            data:result
        })
     }

}
