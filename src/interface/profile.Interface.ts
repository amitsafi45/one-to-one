import Profile from '../entity/Profile'
import Errmsg from '../errorMessage/error.Message'
 interface profileInterfaceTrueResponse{
        sucess: true,
        message: "Profile Data Inserted ",
        data:Profile,

} 
interface profileInterfaceFalseResponse{
    err:Errmsg
}
export {profileInterfaceFalseResponse,profileInterfaceTrueResponse}