import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import topicosRoutes from "./routes/topicos.routes.js";
import usuarioRoutes from "./routes/usuarios.routes.js";

const app = express();

dotenv.config();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/topicos", topicosRoutes);
app.use("/api/usuarios", usuarioRoutes);

export default app;
