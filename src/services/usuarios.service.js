import pool from "../db.js";

export const validateRegisterUsuario = async (username) => {
  const sql = "SELECT * FROM `usuarios` WHERE username = ?";
  const [rows, fields] = await pool.query(sql, [username]);
  return rows;
};

export const registerUsuario = async (data) => {
  const sql = "INSERT INTO `usuarios`(`username`, clave) VALUES (?, ?)";
  const values = [data.username, data.clave];
  const [result, fields] = await pool.query(sql, values);
  return getUsuario(result.insertId);
};

export const getUsuario = async (id, username) => {
  const sql = "SELECT * FROM `usuarios` WHERE `id` = ? OR `username` = ?";
  const [rows, fields] = await pool.query(sql, [id, username]);
  return rows[0];
};
