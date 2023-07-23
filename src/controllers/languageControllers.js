import * as languageService from "../services/languageServices.js";

export async function insertLanguage(req, res) {
    const language = req.body;
    const result = await languageService.insertLanguage(language.name);
    res.sendStatus(201);
}
    
export async function deleteLanguage(req, res) {
  const id = req.params.id;
  const result = await languageService.deleteLanguage(id);
  res.send(result).status(200);
}

export async function selectLanguage(req, res) {
  const id = req.params.id;
  const result = await languageService.selectLanguage(id);
  res.send(result).status(200);
}

export async function selectLanguages(req, res) {
  const result = await languageService.selectLanguages();
  res.send(result).status(200);
}

export async function updateLanguage(req, res) {
  const id = req.params.id;
  const language = req.body;
  const result = await languageService.updateLanguage(language.name, id);
  res.send(result).status(200);
}