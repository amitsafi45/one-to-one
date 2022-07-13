import dataSource from '../database/Config'
import User from '../entity/User'
import Profile from '../entity/Profile'
class Service{
    
        userService=async(userData:any):Promise<any>=>{
            try{
        const user: User = new User();
        user.firstName =userData.firstName
        user.lastName =userData.lastName 
        user.age=userData.age
        user.profile=userData.profile_id
        const userRepository = dataSource.getRepository(User);
         const output=  userRepository.save(user)
         return output
    }
    catch(error){
        return error
    }

    }
    profileService=async(userData:any):Promise<any>=>{
        try{
            const profile:Profile = new Profile();
            profile.gender =userData.gender
            profile.photo =userData.photo 
            const profileRepository = dataSource.getRepository(Profile);
             const output=  profileRepository.save(profile)
             
            // return output
        }
        catch(error){
            return error
        }
    }
    userProfile=async(userData:any):Promise<any>=>{
        //To load user with profile inside you must specify relation in FindOptions:
        const users = await dataSource.getRepository(User).find({relations:['profile']})
        return users

    }

}
export default new Service()