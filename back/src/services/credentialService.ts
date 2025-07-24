import ICreateCredentialDto from "../dtos/ICreateCredentialDto";
import Credential from "../entities/CrendentialEntity";
import ICredentials from "../interfaces/ICredentials";
import { credentialRepository } from "../repositories/indexRepository";

//* Crea Credenciales
export const createCredentialService = async (
  createCredentialDto: ICreateCredentialDto
): Promise<ICredentials> => {
  const { username, userPassword } = createCredentialDto;
  //*Validar que no existe la credencial...
  const foundCredential: Credential | null = await credentialRepository.findOneBy({ username });
  if (foundCredential) throw Error(`Ya existe la credencial ${username}`);
  //*Crear credencial:
  const newCredential: Credential = credentialRepository.create({
    username,
    userPassword,
  });
  //*Guardar crendencial en BBDD:
  await credentialRepository.save(newCredential);

  return newCredential;
};

//* Validar credenciales
export const validateCredentialService = async (
  validateCredentialDto: ICreateCredentialDto
): Promise<number> => {
  const { username, userPassword } = validateCredentialDto;
  //*Verificar que exista la credencial:
  const foundCredential: Credential | null = await credentialRepository.findOneBy({ username });
  if (!foundCredential) throw Error("Credenciales incorrectas");
  //*Verificar password:
  if (userPassword !== foundCredential.userPassword) throw Error("Credenciales incorrectas");

  return foundCredential.id;
};
