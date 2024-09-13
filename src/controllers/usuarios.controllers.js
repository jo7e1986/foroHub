import { encryptPassword, checkPassword } from "../libs/bcrypt.js";
import { signJwt } from "../libs/jwt.js";
import {
  getUsuario,
  registerUsuario,
  validateRegisterUsuario,
} from "../services/usuarios.service.js";

export const registerUsuarioController = async (req, res) => {
  try {
    const { username, clave } = req.body;
    const rows = await validateRegisterUsuario(username);
    if (rows.length >= 1) {
      return res.status(400).json({ message: "Duplicated user" });
    }
    const hash = await encryptPassword(clave);
    const result = await registerUsuario({
      username,
      clave: hash,
    });
    const token = await signJwt(username);
    return res
      .status(201)
      .json({ id: result.id, username: result.username, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const loginUsuarioController = async (req, res) => {
  try {
    const { username, clave } = req.body;
    const result = await getUsuario(null, username);
    if (result === undefined) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const checked = await checkPassword(clave, result.clave);
    if (!checked) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const token = await signJwt(username);
    return res.json({ id: result.id, username, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const protectedController = async (req, res) => {
  try {
    return res.json({ message: "You have access" });
  } catch (error) {
    console.log(error);
  }
};
