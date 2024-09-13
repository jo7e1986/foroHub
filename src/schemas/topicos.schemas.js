import { z } from "zod";

export const createTopicoSchema = z.object({
  titulo: z.string().max(150),
  mensaje: z.string().max(300),
  fecha_creacion: z.string().date(),
  estatus: z.enum(["Enviado", "Recibido"]),
  autor: z.string().max(150),
  curso: z.string().max(150),
});
