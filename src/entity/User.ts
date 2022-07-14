import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
 } from "typeorm";
import Profile from "./Profile";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  'id': number;

  @Column({"nullable":false})
  'firstName': string;

  @Column({"nullable":false})
  'lastName': string;

  @Column({"nullable":false})
  'age': number;

  @OneToOne(() => Profile, (profile) => profile.user)
//  , {
//      cascade: true,
//    })
//  
  // @JoinColumn({name:'profile_id'})
   'profile':Profile;
}
