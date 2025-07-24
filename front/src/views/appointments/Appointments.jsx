import { useEffect, useState } from "react";
import myAppointments from "../../helpers/myAppoinments";
import AppointmentCard from "../../components/appointmentCard/appointmentCard";
import styles from "./Appointments.module.css";
import axios from "axios";

const GETAPPOINTMENTS_URL = "http://localhost:3000/appointments";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get(GETAPPOINTMENTS_URL)
      .then((response) => response.data)
      .then((appointmentsFromDB) => setAppointments(appointmentsFromDB))
      .catch((error) => {
        alert("Error al hacer el request." + error.mensage);
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <h1>Mis Turnos:</h1>
      </div>
      {appointments.map((appointment, index) => (
        <AppointmentCard
          key={index}
          id={appointment.id}
          date={appointment.date}
          time={appointment.time}
          status={appointment.status}
          description={appointment.description}
        />
      ))}
      <div></div>
    </div>
  );
}

export default Appointments;
