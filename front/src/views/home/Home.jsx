import styles from "./Home.module.css";
import logo from "../../assets/img/medarlogo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.eslogan}>
          <h1>Bienvenidos/as</h1>
        </div>
        <div className={styles.eslogan2}>
          <h2>
            Nos especializamos en tu atención.<br></br>
            Rápida, Eficaz y Personalizada
          </h2>
        </div>
        <div className={styles.boton}>
          <Link to="/about">
            <span>LEER MAS</span>
          </Link>
        </div>
      </div>
      <div className={styles.rightSection}>
        <img src={logo} alt="log" />
      </div>
    </div>
  );
}

export default Home;
