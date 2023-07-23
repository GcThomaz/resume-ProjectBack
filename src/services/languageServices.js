import * as languageRepository from "../repositories/languageRepositories.js";
import * as errorsUtills from "../utils/errorUtills.js";
import { queryAsync } from "../utils/query.js";

export async function getLanguageByName(name) {
  const result = await queryAsync(languageRepository.getLanguageByName, [name]);
  if (result) {
    return result;
  }
}

export async function getLanguageById(id) {
  const result = await queryAsync(languageRepository.getLanguageById, [id]);
  if (result) {
    return result;
  }
}

export async function insertLanguage(name) {
  const languageExist = await getLanguageByName(name);

  if (languageExist.length > 0) {
    throw errorsUtills.failsConflict("This Language Skills already exists!");
  } else {
    await queryAsync(languageRepository.insertLanguage, [name]);
    return;
  }
}

export async function deleteLanguage(id) {
  const languageExist = await selectLanguage(id);
  if (languageExist.length == 0) {
    throw errorsUtills.failNotFound("This Language Skill do not exist!");
  }
  await queryAsync(languageRepository.deleteLanguage, [id]);
  return;
}

export async function selectLanguage(id) {
  const selectLanguage = await queryAsync(languageRepository.selectLanguage, [id]);
  if (selectLanguage.length == 0) {
    throw errorsUtills.failNotFound("This Language Skill do not exist!");
  }
  return selectLanguage;
}

export async function selectLanguages() {
  const selectLanguages = await queryAsync(languageRepository.selectLanguages);
  return selectLanguages;
}

export async function updateLanguage(name, id) {
  const languageExist = await selectLanguage(id);
  if (languageExist.length == 0) {
    throw errorsUtills.failNotFound("This Language do not exist!");
  }
  await queryAsync(languageRepository.updateLanguage, [name, id]);
  return;
}