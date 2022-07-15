import {  NextFunction ,Request,Response} from "express";
import Errmsg from "../errorMessage/error.Message";
const errorHandler=async(error:Errmsg,req:Request,res:Response,next:NextFunction)=>{
  //  res.status(error.status ||500)
    res.status(error.statuscode|| 500).send({"error":true,"message":error.message || "Internal Server Error"})



}
export default errorHandler