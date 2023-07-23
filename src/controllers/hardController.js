import * as hardServices from "../services/hardServices.js";

export async function insertHard(req, res) {
    const hard = req.body;
    const result = await hardServices.insertHard(hard.name);
    res.sendStatus(201);
}
    
export async function deleteHard(req, res) {
  const id = req.params.id;
  const result = await hardServices.deleteHard(id);
  res.send(result).status(200);
}

export async function selectHard(req, res) {
  const id = req.params.id;
  const result = await hardServices.selectHard(id);
  res.send(result).status(200);
}

export async function selectHards(req, res) {
  const result = await hardServices.selectHards();
  res.send(result).status(200);
}

export async function updateHard(req, res) {
  const id = req.params.id;
  const hard = req.body;
  const result = await hardServices.updateHard(hard.name, id);
  res.send(result).status(200);
}