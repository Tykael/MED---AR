import { Request, Response } from "express";
import {
  createUserService,
  findUserByCredentialId,
  getAllUserService,
} from "../services/userService";
import { getUserByIdService } from "../services/userService";
import { validateCredentialService } from "../services/credentialService";
import User from "../entities/UserEntity";

//* GET /users => btener el listado de todos los usuarios.

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getAllUserService();
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Error inesperado", error });
    }
  }
};

//* GET /users/:id => Obtener el detalle de un usuario específico.
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user: User | null = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Error inesperado", error });
    }
  }
};

//? POST /users/register => Registro de un nuevo usuario.
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, userPassword } = req.body;
    await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      userPassword,
    });

    res.status(201).json({ message: "Usuario registrado con exito" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Error inesperado", error });
    }
  }
};

//? POST /users/login => Login del usuario a la aplicación.
export const login = async (req: Request, res: Response) => {
  try {
    const { username, userPassword } = req.body;

    const credentialId: number = await validateCredentialService({ username, userPassword });
    //* Buscar usuario por credentialID
    const user = await findUserByCredentialId(credentialId);
    res.status(200).json({
      login: true,
      user,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Error inesperado", error });
    }
  }
};
