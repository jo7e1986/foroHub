import {
  createTopico,
  deleteTopico,
  getTopico,
  getTopicos,
  updateTopico,
  validateCreate,
} from "../services/topicos.service.js";

export const createTopicoController = async (req, res) => {
  try {
    const topico = req.body;
    const rows = await validateCreate(topico.titulo, topico.mensaje);
    if (rows.length >= 1) {
      return res.status(400).json({ message: "Duplicated topic" });
    }
    const result = await createTopico(topico);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTopicosController = async (req, res) => {
  try {
    const result = await getTopicos();
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTopicoController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getTopico(id);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTopicoController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateTopico(data, id);
    if (!result) {
      return res.status(500).json({ message: "Error updating topic" });
    }
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTopicoController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteTopico(id);
    if (!result) {
      return res.status(500).json({ message: "Error deleting topic" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
