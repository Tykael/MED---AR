import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const POSTUSERLOGIN_URL = "http://localhost:3000/users/login";

function Login() {
  const navigate = useNavigate();

  const initialState = {
    username: "",
    userPassword: "",
  };

  const [user, setUser] = useState(initialState);
  const [errors, setError] = useState(initialState);

  const validateUser = ({ username, userPassword }) => {
    const errors = {};
    if (!username) errors.username = "Ingresar username";
    if (!userPassword) errors.userPassword = "Ingresar password";
    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setError(validateUser({ ...user, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(POSTUSERLOGIN_URL, user)
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify({ user: data.user }));
        alert("Usuario logueado...");
        setUser(initialState);
        navigate("/home");
      })
      .catch((error) => {
        alert(`Acceso denegado, ${error?.response?.data?.message}`);
      });
  };

  const formData = [
    { label: "Usuario: ", name: "username", type: "text" },
    { label: "Contraseña: ", name: "userPassword", type: "password" },
  ];

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Inicia Sesión</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          {formData.map(({ label, name, type }) => (
            <div key={name}>
              <label htmlFor={name}>{label}</label>
              <input
                id={name}
                type={type}
                name={name}
                value={user[name]}
                placeholder={`Ingresar ${label.toLowerCase()}`}
                onChange={handleChange}
              />
              {errors[name] && <span>{errors[name]}</span>}
            </div>
          ))}
          <button
            type="submit"
            disabled={Object.values(user).some((e) => !e) || Object.values(errors).some((e) => e)}
          >
            Ingresar
          </button>
          <h2>¿Aun no estas registrado?</h2>
          <Link to="/register">
            <button>REGISTRARSE</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
