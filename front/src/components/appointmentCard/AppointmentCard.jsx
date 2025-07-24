import styles from "./AppointmentCard.module.css";

function AppointmentCard({ id, date, time, status, description, handleAppointmentCancel }) {
  const parseDate = new Date(date);
  const formattedDate = `${parseDate.getDate() + 1} / ${
    parseDate.getMonth() + 1
  } / ${parseDate.getFullYear()}`;

  const handleClick = () => {
    if (window.confirm(`¿Desea cancelar el turno del dia ${formattedDate} a la hora ${time}?`)) {
      handleAppointmentCancel(id);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.date}>{formattedDate}</span>
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
