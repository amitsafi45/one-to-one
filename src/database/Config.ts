import {DataSource} from 'typeorm'
import User from '../entity/User'
import Profile from '../entity/Profile'

export default new DataSource({
      
       type: "mysql",
       host:'localhost',
       port:3306,
       username: "root",
       password: "Password@12345",
       database:'user_accounts',
       synchronize: true,
       logging: true,
        entities:[User,Profile]
    
})
