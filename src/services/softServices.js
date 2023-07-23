import * as softRepository from "../repositories/softRepositories.js";
import * as errorsUtills from "../utils/errorUtills.js";
import { queryAsync } from "../utils/query.js";

export async function getSoftByName(name) {
  const result = await queryAsync(softRepository.getSoftByName, [name]);
  if (result) {
    return result;
  }
}

export async function getSoftById(id) {
  const result = await queryAsync(softRepository.getSoftById, [id]);
  if (result) {
    return result;
  }
}

export async function insertSoft(name) {
  const softExist = await getSoftByName(name);

  if (softExist.length > 0) {
    throw errorsUtills.failsConflict("This Soft Skills already exists!");
  } else {
    await queryAsync(softRepository.insertSoft, [name]);
    return;
  }
}

export async function deleteSoft(id) {
  const softExist = await selectSoft(id);
  if (softExist.length == 0) {
    throw errorsUtills.failNotFound("This Soft Skill do not exist!");
  }
  await queryAsync(softRepository.deleteSoft, [id]);
  return;
}

export async function selectSoft(id) {
  const selectSoft = await queryAsync(softRepository.selectSoft, [id]);
  if (selectSoft.length == 0) {
    throw errorsUtills.failNotFound("This Soft Skill do not exist!");
  }
  return selectSoft;
}

export async function selectSofts() {
  const selectSofts = await queryAsync(softRepository.selectSofts);
  return selectSofts;
}

export async function updateSoft(name, id) {
  const softExist = await selectSoft(id);
  if (softExist.length == 0) {
    throw errorsUtills.failNotFound("This Soft do not exist!");
  }
  await queryAsync(softRepository.updateSoft, [name, id]);
  return;
}