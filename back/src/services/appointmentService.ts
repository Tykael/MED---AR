import IScheduleAppointmentDto from "../dtos/IScheduleAppointmentDto";
import Appointment from "../entities/AppointmentEntity";
import User from "../entities/UserEntity";
import { AppoitmentStatus } from "../interfaces/IAppointment";
import { appointmentRepository, userRepository } from "../repositories/indexRepository";

export const getAllAppointmentService = async (): Promise<Appointment[]> => {
  const allAppointments: Appointment[] = await appointmentRepository.find();
  return allAppointments;
};

export const getAppointmentByIdService = async (turnId: number): Promise<Appointment> => {
  const appointment: Appointment | null = await appointmentRepository.findOneBy({
    id: turnId,
  });
  if (!appointment) throw Error("Turno inexistente");
  return appointment;
};

export const scheduleAppointmentService = async (
  scheduleAppointmentDto: IScheduleAppointmentDto
): Promise<Appointment> => {
  const { date, time, userId } = scheduleAppointmentDto;
  //*Verificamos que exista el usuario:
  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });
  if (!user) throw Error(`No existe ususario con id: ${userId}`);
  //*Creamos el nuevo turno:
  const newAppointment: Appointment = appointmentRepository.create({
    date,
    time,
  });
  //*Asociamos el usuario al turno creado:
  newAppointment.user = user;
  //*Guardamos el turno creado en BBDD:
  await appointmentRepository.save(newAppointment);

  return newAppointment;
};

export const cancelAppointmentService = async (turnId: number): Promise<void> => {
  const appointment: Appointment | null = await appointmentRepository.findOneBy({
    id: turnId,
  });
  if (!appointment) throw Error(`No existe turno con id ${turnId}`);
  appointment.status = AppoitmentStatus.CANCELLED;
  await appointmentRepository.save(appointment);
  return;
};
