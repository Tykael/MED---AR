import medarlogo from "../../assets/img/medarlogo.png";
import avatar from "../../assets/img/avatar.png";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
    const navigate = useNavigate();
    const confirmed = window.confirm("¿Esta seguro que quiere cerrar sesion?");
    if (confirmed) {
      localStorage.removeItem("user");
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <Link to="/home">
          <img src={medarlogo} alt="Logo Medar" />
        </Link>
      </div>
      <div className={styles.spacer}></div> {/* Esto empuja los links y el avatar a la derecha */}
      <div className={styles.linkSection}>
        <Link to="/register">
          <span>Registro</span>
        </Link>
        <Link to="/appointments">
          <span>Turnos</span>
        </Link>
        <Link to="/about">
          <span>Acerca de</span>
        </Link>
        <Link to="/contact">
          <span>Contacto</span>
        </Link>
        <span onClick={handleLogout}>Salir</span>
      </div>
      <div className={styles.avatar}>
        <Link to="/login">
          <img src={avatar} alt="avatar" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
