import User from '../entity/User'
import Errmsg from '../errorMessage/error.Message'
//import Profile from '../entity/Profile'
 interface userInterfaceTrueResponse {
    message: string;
    success: boolean;
    data: User;
   
  }
interface userInterfaceFalseResponse{
    err:Errmsg
}
export {userInterfaceFalseResponse,userInterfaceTrueResponse}