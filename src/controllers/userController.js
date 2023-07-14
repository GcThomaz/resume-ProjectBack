import * as userService from "../services/userServices.js";

export async function insertUser(req, res) {
    const user = req.body;
    const result = await userService.insertUser(user.name, user.age);
    res.sendStatus(201);
}
    
export async function deleteUser(req, res) {
  const id = req.params.id;
  const result = await userService.deleteUser(id);
  res.send(result).status(200);
}

export async function selectUser(req, res) {
  const id = req.params.id;
  const result = await userService.selectUser(id);
  res.send(result).status(200);
}

export async function selectUsers(req, res) {
  const result = await userService.selectUsers();
  res.send(result).status(200);
}

export async function updateUser(req, res) {
  const id = req.params.id;
  const user = req.body;
  const result = await userService.updateUser(user.name, user.age, id);
  res.send(result).status(200);
}