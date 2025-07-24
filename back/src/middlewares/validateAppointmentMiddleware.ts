import { Request, Response, NextFunction } from "express";
import IScheduleAppointmentDto from "../dtos/IScheduleAppointmentDto";

const validateAppointment = (
  req: Request<{}, {}, IScheduleAppointmentDto>,
  res: Response,
  next: NextFunction
) => {
  const { date, time, description } = req.body;
  try {
    //*Validacion de la fecha
    if (!date) throw new Error("El campo date es requerido");
    const appointmentDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const in14Days = new Date(today);
    in14Days.setDate(in14Days.getDate() + 14);

    if (appointmentDate < tomorrow || appointmentDate > in14Days) {
      throw new Error("La fecha debe estar entre mañana y dentro de 14 dias");
    }

    //*Validacion del tiempo

    if (!time) throw new Error("El campo time es requerido");
    const validTimes = [
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
    ];
    if (!validTimes.includes(time)) {
      throw new Error(
        "El campo time debe estar entre las 09:00 y 17:30 en intervalos de 30 minutos"
      );
    }
    //* Validacion de la descripcion
    if (!description) throw new Error("El campo description es requerido");
    if (typeof description !== "string") throw new Error("El campo description debe ser un string");
    if (description.length < 4 || description.length > 50) {
      throw new Error("El campo description debe tener entre 4 y 50 caracteres");
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
  next();
};

export default validateAppointment;
