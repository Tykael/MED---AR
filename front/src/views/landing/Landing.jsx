import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.centralBox}>
        <div className={styles.register}>
          <h3>¿Es tu primera vez en nuestra App?</h3>
          <Link to="/register">
            <button>Registrarse</button>
          </Link>
        </div>

        <div className={styles.login}>
          <h4>¿Ya tienes cuenta?</h4>
          <Link to="/login">
            <button>Inicia sesión</button>
          </Link>
        </div>

        <div className={styles.guest}>
          <h5>¿Quieres ingresar como invitado?</h5>
          <Link to="/home">
            <button>Ingresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
