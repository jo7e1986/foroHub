import { z } from "zod";

export const registerUsuarioSchema = z.object({
  username: z.string().max(150),
  clave: z.string().max(500),
});
