import ICreateUserDto from "../dtos/ICreateUserDto";
import Credential from "../entities/CrendentialEntity";
import User from "../entities/UserEntity";
import IUser from "../interfaces/IUsers";
import { userRepository } from "../repositories/indexRepository";
import { createCredentialService } from "./credentialService";

export const getAllUserService = async (): Promise<User[]> => {
  const allUsers: User[] = await userRepository.find({
    relations: { appointments: true },
  });
  return allUsers;
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
  const user: User | null = await userRepository.findOne({
    where: { id },
    relations: ["appointments"],
  });
  if (!user) throw new Error(`Usuario con id ${id} no encontrado`);
  return user;
};

export const createUserService = async (createUserDto: ICreateUserDto) => {
  const { name, email, birthdate, nDni, username, userPassword } = createUserDto;

  //* Verificamos que el usuario no se encuentre registrado:

  const foundUser: User | null = await userRepository.findOneBy({ email });
  if (foundUser) throw new Error(`El email ${email} ya se encuentra registrado`);
  //*Creamos una nueva credencial:
  const newCredential: Credential = await createCredentialService({
    username,
    userPassword,
  });

  //* Creamos nuevo Usuario:
  const newUser: User = userRepository.create({
    name,
    email,
    birthdate,
    nDni,
  });
  await userRepository.save(newUser);
  //*Asociamos "Credencial" al Usuario y guardamos en BBDD:
  newUser.credential = newCredential;
  await userRepository.save(newUser);

  return newUser;
};

export const findUserByCredentialId = async (credentialId: number): Promise<User | null> => {
  //*Verificamos que exista el usuario:

  const user: User | null = await userRepository.findOneBy({
    credential: { id: credentialId },
  });
  if (!user) throw new Error(`Usuario ${credentialId} no encontrado`);
  return user;
};
