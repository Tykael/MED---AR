import "reflect-metadata";
import { DB_PORT, PORT } from "./config/envs";
import server from "./server";
import { AppDataSource } from "./config/data-source";
import { error } from "console";

//* CONECTAR A BBDD:
AppDataSource.initialize()
  .then(() => {
    console.log(`Database connected on port ${DB_PORT}`);
    //* LEVANTAMOS SERVER
    server.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
