import { Router } from "express";
import {
  loginUsuarioController,
  protectedController,
  registerUsuarioController,
} from "../controllers/usuarios.controllers.js";
import validationSchemasMiddleware from "../middlewares/validationSchemas.middleware.js";
import { registerUsuarioSchema } from "../schemas/usuarios.schemas.js";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware.js";

const router = Router();

router.post(
  "/register",
  validationSchemasMiddleware(registerUsuarioSchema),
  registerUsuarioController
);

router.post(
  "/login",
  validationSchemasMiddleware(registerUsuarioSchema),
  loginUsuarioController
);

router.get("/protected", verifyTokenMiddleware, protectedController);

export default router;
