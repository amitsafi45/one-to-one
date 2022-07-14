import { Column, Entity, OneToOne, PrimaryGeneratedColumn,JoinColumn } from "typeorm";
import User from "./User";

@Entity()
export default class Profile {
  @PrimaryGeneratedColumn()
  'id': number;

  @Column()
  'gender': string;

  @Column()
  'photo': string;

  @OneToOne(() => User, (user) => user.profile
  , {
    cascade: true,
  })
 @JoinColumn({name:'user_id'})
 'user': User;
}
