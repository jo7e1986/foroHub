import { Router } from "express";
import {
  createTopicoController,
  deleteTopicoController,
  getTopicoController,
  getTopicosController,
  updateTopicoController,
} from "../controllers/topicos.controllers.js";
import validationSchemasMiddleware from "../middlewares/validationSchemas.middleware.js";
import { createTopicoSchema } from "../schemas/topicos.schemas.js";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware.js";

const router = Router();

router.post(
  "/",
  verifyTokenMiddleware,
  validationSchemasMiddleware(createTopicoSchema),
  createTopicoController
);

router.get("/", verifyTokenMiddleware, getTopicosController);

router.get("/:id", verifyTokenMiddleware, getTopicoController);

router.put(
  "/:id",
  verifyTokenMiddleware,
  validationSchemasMiddleware(createTopicoSchema),
  updateTopicoController
);

router.delete("/:id", verifyTokenMiddleware, deleteTopicoController);

export default router;
