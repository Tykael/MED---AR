import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppoitmentStatus } from "../interfaces/IAppointment";
import User from "./UserEntity";

@Entity({ name: "appointments" })
class Appointment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  date!: string;

  @Column()
  time!: string;

  @Column({
    default: AppoitmentStatus.ACTIVE,
  })
  status!: AppoitmentStatus;

  @Column()
  employee!: string;

  //* Appointment N:1 User
  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "user_id" })
  user!: User;
}

export default Appointment;
