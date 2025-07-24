import { Request, Response, NextFunction } from "express";
import ICreateCredentialDto from "../dtos/ICreateCredentialDto";

const validateCredential = (
  req: Request<{}, {}, ICreateCredentialDto>,
  res: Response,
  next: NextFunction
) => {
  const { username, userPassword } = req.body;
  try {
    if (!username) throw new Error("El campo username es requerido");
    if (!userPassword) throw new Error("El campo password es requerido");
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
  next();
};

export default validateCredential;
