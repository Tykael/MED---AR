const regexEmail = /\S+@\S+\.\S+/;
const regexLetter = /(?=.*[A-Za-z])/; //* Al menos una letra
const regexNumber = /(?=.*\d)/; //* Al menos un numero
const regexSpecial = /(?=.*[@$!%*?&#])/; //* Al menos un: @$!%*?&$
const regexData = /^\d{4}-\d{2}-\d{2}$/;

const validateUser = ({
  name,
  username,
  userPassword,
  confirmPassword,
  email,
  birthdate,
  nDni,
}) => {
  const errors = {};

  //* Validacion de name:

  if (!name) errors.name = "Ingresar un nombre";
  else {
    if (name.length < 4) errors.name = "Nombre de al menos 4 caracteres";
    if (name.length > 50) errors.name = "Nombre no mayor a 50 caracteres";
  }

  //* Validacion de Email:
  if (!email) errors.email = "Ingresar un correo";
  else {
    if (!regexEmail.test(email)) errors.email = "El correo no tiene un formato valido";
  }

  //* Validacion de birthdate:

  if (!birthdate) errors.birthdate = "Ingresar fecha de nacimiento";
  else {
    if (!regexData.test(birthdate)) errors.birthdate = "Fecha de nacimiento en formato yyyy-mm-dd";
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const birthdateDate = new Date(birthdate);
    const ageDiff = new Date(today.getTime() - birthdateDate.getTime());
    const age = ageDiff.getUTCFullYear() - 1970;
    if (age < 16) errors.birthdate = "No se admiten usuarios menores a 16 años";
  }

  //* Validacion del numero de DNI:
  if (!nDni) errors.nDni = "Ingresar DNI";
  else {
    if (isNaN(Number(nDni))) errors.nDni = "El DNI debe ser un numero";
    if (nDni < 0) errors.nDni = " El DNI debe ser un numero positivo";
  }

  //* Validacion de username:
  if (!username) errors.username = "Ingresar u nombre de usuario";
  else {
    if (username.length < 4) errors.username = "Nombre de usuario de al menos 4 caracteres";
    if (username.length > 20) errors.username = "Nombre de usuario no mayor a 20 caracteres";
  }

  //* Validacion de password:
  if (!userPassword) errors.userPassword = "Ingresar una contraseña";
  else {
    if (userPassword.length < 4)
      errors.userPassword = "La contraseña debe tener al menos 4 caracteres";
    if (userPassword.length > 10)
      errors.userPassword = "La contraseña no debe superar los 10 caracteres";
    if (!regexLetter.test(userPassword))
      errors.userPassword = "La contraseña debe tener al menos una letra";
    if (!regexNumber.test(userPassword))
      errors.userPassword = "La contraseña debe tener por lo menos un numero";
    if (!regexSpecial.test(userPassword))
      errors.userPassword = "La contraseña debe tener al menos un caracter especial @$!%*?&#";
  }

  //* Validacion de confirmacion de password:
  if (userPassword !== confirmPassword)
    errors.confirmPassword = "La contraseña y confirmacion deben ser iguales";

  return errors;
};

export default validateUser;

// console.log(
//   validateUser({
//     name: "Baat",
//     birthdate: "1990-10-14",
//     email: "poroto@email.com",
//     nDni: 40987654,
//     username: "Porotin",
//     userPassword: "Porotito2@",
//     confirmPassword: "Porotito2@",
//   })
// );
