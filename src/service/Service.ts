import dataSource from '../database/Config'
import User from '../entity/User'
import Profile from '../entity/Profile'
import errmsg from '../errorMessage/error.Message'

class Service{
     userService=async(userData:any):Promise<any>=>{
        const user: User = new User();
        user.firstName =userData.firstName
        user.lastName =userData.lastName 
        user.age=userData.age
        user.profile=userData.profile_id
        const userRepository = await dataSource.getRepository(User);
         const output=await userRepository.save(user)
         console.log(output)    
         if (output){
                return ({
                    success:true,
                    message:"User Data Inserted",
                    data:output
                 })

            }else{
                const err= new errmsg("NotInserted")
                err.statuscode=401
                throw err
            }
        
    
 

    }
    profileService=async(userData:any):Promise<any>=>{
         const profile:Profile = new Profile();
            profile.gender =userData.gender
            profile.photo =userData.photo 
            profile.user=userData.user_id
            const profileRepository = dataSource.getRepository(Profile);
             const output=  profileRepository.save(profile)
             
            return ({
                sucess:true,
                message:"Data Inserted ",
                data:output
            })
        }
        
    
    userProfile=async(userData:any):Promise<any>=>{
        //To load user with profile inside you must specify relation in FindOptions:
        const users = await dataSource.getRepository(User).findOne({
            where: { id: 1 },
            relations:['profile']
             })
         
       const data=JSON.stringify(users)
        console.log(data)
        return ({
            message:"Data Found",
            data:users

        })
      

    }

}
export default new Service()