import * as userRepository from "../repositories/userRepositories.js";
import * as errorsUtills from "../utils/errorUtills.js";
import { queryAsync } from "../utils/query.js";

export async function getUserByName(name) {
  const result = await queryAsync(userRepository.getUserByName, [name]);
  if (result) {
    return result;
  }
}

export async function insertUser(name, age) {
  const userExist = await getUserByName(name);

  if (userExist.length > 0) {
    throw errorsUtills.failsConflict("This user already exists!");
  } else {
    await queryAsync(userRepository.insertUser, [name, age]);
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

export async function updateUser(name, age, id) {
  const userExist = await selectUser(id);
  if (userExist.length == 0) {
    throw errorsUtills.failNotFound("This user do not exist!");
  }
  await queryAsync(userRepository.updateUser, [name, age, id]);
  return;
}
