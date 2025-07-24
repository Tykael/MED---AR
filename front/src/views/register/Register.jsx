import React, { useState } from "react";
import styles from "./Register.module.css";
import validateUser from "../../helpers/validateUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const POSTUSER_URL = "http://localhost:3000/users/register";

function Register() {
  const navigate = useNavigate();

  const initialState = {
    name: "",
    username: "",
    userPassword: "",
    confirmPassword: "",
    email: "",
    birthdate: "",
    nDni: "",
  };

  const [user, setUser] = useState(initialState);
  const [errors, setError] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setError(validateUser({ ...user, [name]: value }));
  };

  const handleReset = (event) => {
    event.preventDefault();
    setUser(initialState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name: user.name,
      username: user.username,
      userPassword: user.userPassword,
      email: user.email,
      birthdate: user.birthdate,
      nDni: Number(user.nDni),
    };
    axios
      .post(POSTUSER_URL, userData)
      .then(({ data }) => {
        alert(data.message);
        setUser(initialState);
        navigate("/login");
      })
      .catch((error) => {
        alert("Error al crear usuario,", error.response.data.error);
      });
  };

  const formData = [
    { label: "Nombre: ", name: "name", type: "text" },
    { label: "Nombre de usuario: ", name: "username", type: "text" },
    { label: "Contraseña: ", name: "userPassword", type: "password" },
    { label: "Confirmar contraseña: ", name: "confirmPassword", type: "password" },
    { label: "Email: ", name: "email", type: "email" },
    { label: "Fecha de Nacimiento: ", name: "birthdate", type: "date" },
    { label: "N° de DNI: ", name: "nDni", type: "text" },
  ];

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
        <h2>Registrate</h2>
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
                placeholder={`Ingresar ${name}`}
                onChange={handleChange}
              />
              {errors[name] && <span>{errors[name]}</span>}
            </div>
          ))}
          <button onClick={handleReset}>Borrar Formulario</button>
          <button type="submit" disabled={Object.values(user).some((e) => !e)}>
            Registrar
          </button>
          <h2>¿Ya tenes cuenta?</h2>
          <Link to="/login">
            <button>Inicia Sesion</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
