import * as softService from "../services/softServices.js";

export async function insertSoft(req, res) {
    const soft = req.body;
    const result = await softService.insertSoft(soft.name);
    res.sendStatus(201);
}
    
export async function deleteSoft(req, res) {
  const id = req.params.id;
  const result = await softService.deleteSoft(id);
  res.send(result).status(200);
}

export async function selectSoft(req, res) {
  const id = req.params.id;
  const result = await softService.selectSoft(id);
  res.send(result).status(200);
}

export async function selectSofts(req, res) {
  const result = await softService.selectSofts();
  res.send(result).status(200);
}

export async function updateSoft(req, res) {
  const id = req.params.id;
  const soft = req.body;
  const result = await softService.updateSoft(soft.name, id);
  res.send(result).status(200);
}