import * as hardRepository from "../repositories/hardRepositories.js";
import * as errorsUtills from "../utils/errorUtills.js";
import { queryAsync } from "../utils/query.js";

export async function getHardByName(name) {
  const result = await queryAsync(hardRepository.getHardByName, [name]);
  if (result) {
    return result;
  }
}

export async function getHardById(id) {
  const result = await queryAsync(hardRepository.getHardById, [id]);
  if (result) {
    return result;
  }
}

export async function insertHard(name) {
  const HardExist = await getHardByName(name);

  if (HardExist.length > 0) {
    throw errorsUtills.failsConflict("This Hard Skills already exists!");
  } else {
    await queryAsync(hardRepository.insertHard, [name]);
    return;
  }
}

export async function deleteHard(id) {
  const HardExist = await selectHard(id);
  if (HardExist.length == 0) {
    throw errorsUtills.failNotFound("This Hard Skill do not exist!");
  }
  await queryAsync(hardRepository.deleteHard, [id]);
  return;
}

export async function selectHard(id) {
  const selectHard = await queryAsync(hardRepository.selectHard, [id]);
  if (selectHard.length == 0) {
    throw errorsUtills.failNotFound("This Hard Skill do not exist!");
  }
  return selectHard;
}

export async function selectHards() {
  const selectHards = await queryAsync(hardRepository.selectHards);
  return selectHards;
}

export async function updateHard(name, id) {
  const HardExist = await selectHard(id);
  if (HardExist.length == 0) {
    throw errorsUtills.failNotFound("This Hard do not exist!");
  }
  await queryAsync(hardRepository.updateHard, [name, id]);
  return;
}