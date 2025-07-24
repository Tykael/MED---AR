import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
import User from "../entities/UserEntity";
import Credential from "../entities/CrendentialEntity";
import Appointment from "../entities/AppointmentEntity";

export const AppDataSource = new DataSource({
  //* Datos de conexion:
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  //* Como va a funcionar:
  synchronize: false, //*True para desarrollo, False si ya esta para produccion.
  logging: false, //* Desarrollo
  dropSchema: false,
  entities: [User, Credential, Appointment], //* MODELOS !!!!
  subscribers: [],
  migrations: [], //* Modiicar Tablas en Produccion
});
