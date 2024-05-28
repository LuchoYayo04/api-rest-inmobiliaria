import express from "express";
import morgan from "morgan";
import cors from "cors";

import apartmentRoutes from "./routes/apartment.routes.js";

const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:3000", // Permitir solicitudes desde localhost:3000
    credentials: true, // Habilitar credenciales para permitir el envío de cookies
  })
);

app.use(express.json());

app.use("/api", apartmentRoutes);

export default app;
