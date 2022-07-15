import dataSource from "../database/Config";
import User from "../entity/User";
import Profile from "../entity/Profile";
import Errmsg from "../errorMessage/error.Message";
import {userInterfaceTrueResponse,userInterfaceFalseResponse} from "../interface/user.Interface";
import { profileInterfaceFalseResponse, profileInterfaceTrueResponse } from "../interface/profile.Interface";


class Service {
  userService = async (userData:any): Promise<userInterfaceTrueResponse |userInterfaceFalseResponse> => {
    const user: User = new User();
    user.firstName = userData.firstName;
    user.lastName = userData.lastName;
    user.age = userData.age;
    user.profile = userData.profile_id;
    const userRepository = await dataSource.getRepository(User);
    const output = await userRepository.save(user);
    console.log(output);
    if (output) {
      return {
        success: true,
        message: "User Data Inserted",
        data: output,
      };
    } else {
      const err = new Errmsg("NotInserted");
      err.statuscode = 401;
      throw err;
    }
  };
  profileService = async (userData: any): Promise<profileInterfaceTrueResponse | profileInterfaceFalseResponse> => {
    console.log(userData);
    console.log(userData.userpic);
    const profile: Profile = new Profile();
    profile.gender = userData.userbody.gender;
    profile.photo = userData.userpic.path;
    profile.user = userData.userbody.user_id;
    const profileRepository = await dataSource.getRepository(Profile);
    const output = await profileRepository.save(profile);
    if (output) {
      return {
        sucess: true,
        message: "Profile Data Inserted ",
        data: output,
      };
    } else {
      const err = new Errmsg("NotInserted");
      err.statuscode = 401;
      throw err;
    }
  };

  userProfile = async ( findingdby:number):Promise<any> => {
    //To load user with profile inside you must specify relation in FindOptions:
    const users = await dataSource.getRepository(User).findOne({
      where: { id: findingdby },
      relations: ["profile"],
    });
    if (users) {
      return {
        success:true,
        message: "Data Found",
        data: users,
      };
    } else {
      const err = new Errmsg("NotFound");
      err.statuscode = 401;
      err.message = "Data NOt Found";
      throw err;
    }
  };
}
export default new Service();
