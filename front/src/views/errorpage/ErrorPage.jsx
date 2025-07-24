import { useEffect } from "react";
import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 5000);

    //* Limpieza en caso de desmontaje:
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <h1>No hay nada aqui...</h1>
      <h2>404</h2>
    </div>
  );
}

export default ErrorPage;
