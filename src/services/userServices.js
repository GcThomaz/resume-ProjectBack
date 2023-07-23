import * as userRepository from "../repositories/userRepositories.js";
import * as softRepository from "../repositories/softRepositories.js";
import * as hardRepository from "../repositories/hardRepositories.js";
import * as languageRepository from "../repositories/languageRepositories.js";
import * as errorsUtills from "../utils/errorUtills.js";
import { queryAsync } from "../utils/query.js";

export async function getUserByName(firstName) {
  const result = await queryAsync(userRepository.getUserByName, [firstName]);
  if (result) {
    return result;
  }
}

export async function getUserById(id) {
  const result = await queryAsync(userRepository.getUserById, [id]);
  if (result) {
    return result;
  }
}

export async function insertUser(firstName, lastName, age, profession, phone, email, city, cep) {
  const userExist = await getUserByName(firstName);

  if (userExist.length > 0) {
    throw errorsUtills.failsConflict("This user already exists!");
  } else {
    await queryAsync(userRepository.insertUser, [firstName, lastName, age, profession, phone, email, city, cep]);
    return;
  }
}

export async function deleteUser(id) {
  const userExist = await selectUser(id);
  if (userExist.length == 0) {
    throw errorsUtills.failNotFound("This user do not exist!");
  }
  await queryAsync(userRepository.deleteUser, [id]);
  return;
}

export async function selectUser(id) {
  const selectUser = await queryAsync(userRepository.selectUser, [id]);
  if (selectUser.length == 0) {
    throw errorsUtills.failNotFound("This user do not exist!");
  }
  return selectUser;
}

export async function selectUsers() {
  const selectUsers = await queryAsync(userRepository.selectUsers);
  return selectUsers;
}

export async function updateUser(firstName, lastName, age, profession, phone, email, city, cep, id) {
  const userExist = await selectUser(id);
  if (userExist.length == 0) {
    throw errorsUtills.failNotFound("This user do not exist!");
  }
  await queryAsync(userRepository.updateUser, [firstName, lastName, age, profession, phone, email, city, cep, id]);
  return;
}


export async function insertSoftSkills(skillName, id) {
  const userExist = await getUserById(id);
  if (userExist.length == 0) {
    throw errorsUtills.failNotFound("This user do not exist!");
  }
  await queryAsync(userRepository.insertSoftSkills, [skillName, id]);
  return;
}

export async function selectButons() {
  let selectSofts = await queryAsync(softRepository.selectSofts);
  selectSofts = JSON.parse(JSON.stringify(selectSofts));

  let selectHards = await queryAsync(hardRepository.selectHards);
  selectHards = JSON.parse(JSON.stringify(selectHards));

  let selectLanguages = await queryAsync(languageRepository.selectLanguages);
  selectLanguages = JSON.parse(JSON.stringify(selectLanguages));

  let buttonSoft = []
  selectSofts.map((x) => {
    buttonSoft.push({name : x.name, id : x.id})    
  });

 let buttonHard = []
  selectHards.map((x) => {
    buttonHard.push({name : x.name, id: x.id})
  });

  let buttonLanguage = []
  selectLanguages.map((x) => {
    buttonLanguage.push({name : x.name, id: x.id})
  });

  const resultFormat = [{
    name : "Soft Skills",
    button: buttonSoft
  },
  {
    name : "Hard Skills",
    button: buttonHard
  },
  {
    name : "Languages",
    button: buttonLanguage
  }
]
  return resultFormat;
}