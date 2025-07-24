import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./AppointmentForm.module.css";
import { useNavigate } from "react-router-dom";
import getUserIdFromLocalStorage from "../../helpers/localUser";

const POSTAPPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

function AppointmentForm() {
  //*Hooks & Datos del LocalStorage:
  const navigate = useNavigate();
  const userId = getUserIdFromLocalStorage();

  //* Redirigimos a "/" Si no hay usuario logueado:
  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId, navigate]);

  //* Estados locales:
  const initialState = {
    date: "",
    hours: "09",
    minutes: "00",
    description: "",
  };

  const [appointment, setAppointment] = useState(initialState);
  const [errors, setErrors] = useState({
    date: "Debe ingresar una fecha",
  });

  //* Validacion:
  const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 5 || day === 6;
  };

  const validateAppointment = ({ date, hours, minutes, description }) => {
    const errors = {};
    if (!date) errors.date = "Ingresar fecha";
    else if (isWeekend(date)) errors.date = "La fecha seleccionada es un fin de semana";
    if (!description) errors.description = "Ingresar descripcion";
    else if (description.length < 5) errors.description = "Descripcion de al menos 5 caracteres";
    else if (description.length > 25) errors.description = "Descripcion de hasta 25 caracteres";
    return errors;
  };

  //* Handles :

  const handleChange = (event) => {
    const { value, name } = event.target;
    const updateAppoinment = {
      ...appointment,
      [name]: value,
    };
    setAppointment(updateAppoinment);
    setErrors(validateAppointment(updateAppoinment));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAppointment = {
      date: appointment.date,
      time: `${appointment.hours}:${appointment.minutes}`,
      description: appointment.description,
      userId,
    };

    axios
      .post(POSTAPPOINTMENT_URL, newAppointment)
      .then(({ data }) => {
        alert(`Ha sido creada la reserva: Fecha ${data.date}, hora ${data.time}`);
        setAppointment(initialState);
        navigate("/appointments");
      })
      .catch((error) => {
        console.error(error.response?.data || error.message);
        alert(`Error: ${error.response?.data?.error || error.message}`);
      });
  };

  //* Generar Select Horas y Minutos Validos:
  const validHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
  const validMinutes = ["00", "30"];

  //* Restringir fechas en input de fecha:
  function getTomorrow() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  }

  function getFourteenDaysAhead() {
    const today = new Date();
    const fourteenDaysAhead = new Date(today);
    fourteenDaysAhead.setDate(fourteenDaysAhead.getDate() + 13);
    return fourteenDaysAhead.toISOString().split("T")[0];
  }

  return (
    <div className={styles.formContainer}>
      <h2>Nuevo Turno</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Fecha: </label>
          <input
            type="date"
            id="date"
            name="date"
            min={getTomorrow()}
            max={getFourteenDaysAhead()}
            value={appointment.date}
            onChange={handleChange}
          />
          {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}
        </div>

        <div>
          <label htmlFor="time">Horario: </label>
          <select id="hours" name="hours" value={appointment.hours} onChange={handleChange}>
            {validHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select id="minutes" name="minutes" value={appointment.minutes} onChange={handleChange}>
            {validMinutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>
        <br />

        <div>
          <label htmlFor="description">Descripcion: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={appointment.description}
            placeholder="Ingresar Descripcion..."
            onChange={handleChange}
          />
          {errors.description && <span style={{ color: "red" }}>{errors.description}</span>}
        </div>
        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
