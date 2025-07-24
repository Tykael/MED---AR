import { Router } from "express";
import { getAllUsers, getUserById, login, register } from "../controllers/usersControllers";
import validateUser from "../middlewares/validateUserMiddleware";

const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUserById);

userRouter.post("/register", validateUser, register);

userRouter.post("/login", login);

export default userRouter;
