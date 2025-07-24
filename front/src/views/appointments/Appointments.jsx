import { useEffect, useState } from "react";
import myAppointments from "../../helpers/myAppoinments";
import AppointmentCard from "../../components/appointmentCard/appointmentCard";
import styles from "./Appointments.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getUserIdFromLocalStorage from "../../helpers/localUser";

const GETAPPOINTMENTS_URL = "http://localhost:3000/appointments";
const GETUSERBYID_URL = "http://localhost:3000/users/";
const CANCEL_URL = "http://localhost:3000/appointments/cancel/";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const userId = getUserIdFromLocalStorage();
  const navigate = useNavigate();
  useEffect(() => {
    !userId && navigate("/");
  }, [userId, useNavigate]);

  useEffect(() => {
    axios
      .get(GETUSERBYID_URL + userId)
      .then((response) => response.data)
      .then((userFromDB) => setAppointments(userFromDB.appointments))
      .catch((error) => {
        alert("Error al hacer el request." + error.mensage);
        console.log(error);
      });
  }, [userId]);

  const handleAppointmentCancel = (id) => {
    axios
      .put(CANCEL_URL + id)
      .then((data) => {
        axios
          .get(GETUSERBYID_URL + userId)
          .then((response) => response.data)
          .then((userFromDB) => setAppointments(userFromDB.appointments))
          .catch((error) => alert(error));
      })
      .catch((error) => alert(error));
  };

  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div>
      <div className={styles.container}>
        <h1>Mis Turnos:</h1>
      </div>

      {appointments.length ? (
        sortedAppointments.map((appointment, index) => (
          <AppointmentCard
            key={index}
            id={appointment.id}
            date={appointment.date}
            time={appointment.time}
            status={appointment.status}
            description={appointment.description}
            handleAppointmentCancel={handleAppointmentCancel}
          />
        ))
      ) : (
        <h2>Aun no tienes reservas...</h2>
      )}
      <div></div>
    </div>
  );
}

export default Appointments;
