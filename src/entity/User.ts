import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import Profile from "./Profile";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  'id': number;

  @Column()
  'firstName': string;

  @Column()
  'lastName': string;

  @Column()
  'age': number;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: true,
  })
  @JoinColumn({name:'profile_id'})
  'profile':Profile;
}
