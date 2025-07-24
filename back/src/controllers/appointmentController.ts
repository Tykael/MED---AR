import { Request, Response } from "express";
import {
  cancelAppointmentService,
  getAllAppointmentService,
  getAppointmentByIdService,
  scheduleAppointmentService,
} from "../services/appointmentService";
import Appointment from "../entities/AppointmentEntity";

//* GET /appointments => Obtener el listado de todos los turnos de todos los appointments
export const getAllAppointments = async (req: Request, res: Response): Promise<void> => {
  try {
    const allAppointments: Appointment[] = await getAllAppointmentService();
    res.status(200).json(allAppointments);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

//* GET /appointments/:id => Obtener el detalle de un turno especifico.
export const getAppointmentById = async (
  req: Request<{ turnId: string }, {}, {}>,
  res: Response
): Promise<void> => {
  const { turnId } = req.params;
  try {
    const appointment = await getAppointmentByIdService(Number(turnId));
    res.status(200).json(appointment);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

//* POST /appointments/schedule => Agendar un nuevo turno
export const schedule = async (req: Request, res: Response): Promise<void> => {
  const { date, time, description, userId } = req.body;
  try {
    const newAppointment: Appointment = await scheduleAppointmentService({
      date,
      time,
      description,
      userId,
    });
    res.status(201).json(newAppointment);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//*PUT /appointments/cancel/:turnId => Cambiar el status de un tuno a cancelado
export const cancel = async (
  req: Request<{ turnId: string }, {}, {}>,
  res: Response
): Promise<void> => {
  const { turnId } = req.params;
  try {
    await cancelAppointmentService(Number(turnId));
    res.status(200).json({
      message: `Turno con id: ${turnId} cancelado`,
    });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};
