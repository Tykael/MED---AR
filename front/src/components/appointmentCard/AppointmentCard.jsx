import styles from "../appointmentCard/AppointmentCard.module.css";

function AppointmentCard({ id, date, time, status, description }) {
  const parseDate = new Date(date);
  const formattedDate = `${parseDate.getDate() + 1} / ${
    parseDate.getMonth() + 1
  } / ${parseDate.getFullYear()}`;

  const handleClick = () => {
    alert(`¿Desea cancelar el turno del dia ${formattedDate} a la hora ${time}?`);
  };

  return (
    <div className={styles.container}>
      <span>{formattedDate}</span>
      <span>{time}</span>
      <span>{description}</span>
      {status === "active" ? (
        <span className={styles.active} onClick={handleClick}>
          {status}
        </span>
      ) : (
        <span className={styles.cancelled}>{status}</span>
      )}
    </div>
  );
}

export default AppointmentCard;
