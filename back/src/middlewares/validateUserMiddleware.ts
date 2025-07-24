import { Request, Response, NextFunction } from "express";
import ICreateUserDto from "../dtos/ICreateUserDto";

const validateUser = (req: Request<{}, {}, ICreateUserDto>, res: Response, next: NextFunction) => {
  const { name, email, birthdate, nDni, username, userPassword } = req.body;
  try {
    //*Validacion de name:
    if (!name) throw new Error("El campo es requerido");
    if (name.length < 4) throw new Error("El campo name debe tener al menos 4 caracteres");
    if (name.length > 50) throw new Error("El campo name debe tener como maximo 50 caracteres");

    //* Validacion de email:
    if (!email) throw new Error("El campo email es requerido");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) throw new Error("El campo email debe ser un email valido");
    //*Validacion de año de nacimiento
    if (!birthdate) throw new Error("El campo birthdate es requerido");
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthdate))
      throw new Error("El campo birthdate debe estar en formato yyyy-mm-dd");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const birthdateDate = new Date(birthdate);
    const ageDiff = new Date(today.getTime() - birthdateDate.getTime());
    const age = ageDiff.getUTCFullYear() - 1970;
    if (age < 16) throw new Error("La persona  debe tener al menos 16 años");
    //* Validacion del numero de DNI:

    if (!nDni) throw new Error("El campo nDni es requerido");
    if (typeof nDni !== "number") throw new Error("El campo nDni debe ser un numero");
    if (nDni < 0) throw new Error("El campo nDni debe ser un numero");

    //* Validacion de username:
    if (!username) throw new Error("El campo username es requerido");
    if (username.length < 4) throw new Error("El campo username debe tener al menos 4 caracteres");
    if (username.length > 20)
      throw new Error("El campo username debe tener como maximo 20 caracteres");

    //* Validacion de password:
    if (!userPassword) throw new Error("El campo password es requerido");
    if (userPassword.length < 4) throw new Error("El campo debe tener al menos 4 caracteres");
    if (userPassword.length > 10) throw new Error("El campo debe tener no mas de 10 caracteres");
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;
    if (!passwordRegex.test(userPassword))
      throw new Error(
        "El password debe tener al menos una letra, un numero y un caracter especial"
      );
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
  next();
};

export default validateUser;
