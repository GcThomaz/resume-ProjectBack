import * as userRepository from "../repositories/userRepositories.js";
import conexion from "../mysqlStrategy/mysqlStrategy.js";
import * as errorsUtills from "../utils/errorUtills.js";

export function getUserByName(name) {
  return new Promise((resolve, reject) => {
    conexion.query(userRepository.getUserByName, [name], function (error, results) {
      if(error) {
        console.log(error);
        reject();
      } else {
        resolve(results);
      }
  });
  });  
}


export async function insertUser(name, age) {
  try {
    const userExist = await getUserByName(name);

    if (userExist) {
      throw errorsUtills.failsConflict('This user already exists!');
    } else {
      await queryAsync(userRepository.insertUser, [name, age]);
      console.log("Created");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function deleteUser(id) {
  return new Promise((resolve, reject) => {
    conexion.query(userRepository.deleteUser, [id], function (error, results) {
      if (error) {
        reject();
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
}

export function selectUser(id) {
  return new Promise((resolve, reject) => {
    conexion.query(userRepository.selectUser, [id], function (error, results) {
      if (error) {
        reject();
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
}

export async function selectUsers() {
  return new Promise((resolve, reject) => {
    conexion.query(userRepository.selectUsers, function (error, results) {
      if (error) {
        reject();
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
}

export function updateUser(name, age, id) {
  return new Promise((resolve, reject) => {
    conexion.query(userRepository.updateUser, [name, age, id], function (error, results) {
      if (error) {
        console.log(error);
        reject();
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
}