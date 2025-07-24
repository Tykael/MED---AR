import React from "react";

function AppointmentForm() {
  let userId;

  const userData = localStorage.getItem("user");
  if (userData) {
    //* Esta logueado
    const user = JOSN.parse(userData);
    userId = user.user.id;
  } else {
    //* Usuario no logueado
  }

  //* Borrar propiedad del LocalStorage:

  const handleLogout = () => {
    localStorage.removeItem("user");
    //* Codigo del handle...
  };

  return <div>AppointmentForm</div>;
}

export default AppointmentForm;
