import { AppDataSource } from "../config/data-source";
import Appointment from "../entities/AppointmentEntity";
import Credential from "../entities/CrendentialEntity";
import User from "../entities/UserEntity";

export const credentialRepository = AppDataSource.getRepository(Credential);
export const userRepository = AppDataSource.getRepository(User);
export const appointmentRepository = AppDataSource.getRepository(Appointment);
