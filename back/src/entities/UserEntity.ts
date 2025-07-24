import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credential from "./CrendentialEntity";
import Appointment from "./AppointmentEntity";

@Entity({ name: "users" })
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  birthdate!: string;

  @Column({ unique: true })
  nDni!: number;

  @Column({ unique: true })
  email!: string;

  //*User 1:1 Credential
  @OneToOne(() => Credential)
  @JoinColumn({ name: "credential_id" })
  credential!: Credential; //*  { id , username, userPassword}

  //*User 1:N Appointment
  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments!: Appointment[];
}
export default User;
