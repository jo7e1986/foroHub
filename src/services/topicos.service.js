import pool from "../db.js";

export const validateCreate = async (titulo, mensaje) => {
  const sql = "SELECT * FROM `topicos` WHERE `titulo` = ? AND `mensaje` = ?";
  const values = [titulo, mensaje];
  const [rows, fields] = await pool.query(sql, values);
  return rows;
};

export const createTopico = async (topico) => {
  const sql =
    "INSERT INTO topicos(titulo, mensaje, fecha_creacion, estatus, autor, curso) VALUES (?, ?, ?, ?, ?, ?)";
  const [result, fields] = await pool.query(sql, [
    topico.titulo,
    topico.mensaje,
    topico.fecha_creacion,
    topico.estatus,
    topico.autor,
    topico.curso,
  ]);

  return getTopico(result.insertId);
};

export const getTopicos = async () => {
  const sql = "SELECT * FROM `topicos`";
  const [rows, fields] = await pool.query(sql);
  return rows;
};

export const getTopico = async (id) => {
  const sql = "SELECT * FROM `topicos` WHERE `id` = ?";
  const [rows, fields] = await pool.query(sql, [id]);
  return rows[0];
};

export const updateTopico = async (topico, id) => {
  const sql = "UPDATE `topicos` SET ? WHERE id = ? LIMIT 1";
  const values = [topico, id];
  const [result, fields] = await pool.query(sql, values);
  if (result.affectedRows >= 1) return getTopico(id);
  return null;
};

export const deleteTopico = async (id) => {
  const sql = "DELETE FROM `topicos` WHERE `id` = ? LIMIT 1";
  const [result, fields] = await pool.query(sql, [id]);
  if (result.affectedRows >= 1) return true;
  return false;
};
