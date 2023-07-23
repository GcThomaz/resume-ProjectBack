const insertUser = `INSERT INTO user(firstName, lastName, age, profession, phone, email, city, cep) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
const deleteUser = `DELETE FROM user WHERE id = ?`;
const selectUsers = `SELECT * FROM user`;
const selectUser = `SELECT user.*, softSkills.skillName FROM user LEFT JOIN softSkills ON user.id = softSkills.userId WHERE user.id = ?`;
const updateUser = `UPDATE user SET firstName = ?, lastName = ?, age = ?, profession = ?, phone = ?, email = ?, city = ?, cep = ? WHERE id = ?`;
const getUserByName = `SELECT * FROM user WHERE firstName = ?`;
const getUserById = `SELECT * FROM user WHERE id = ?`;

const insertSoftSkills = `INSERT INTO softSkills(userId, skillName) VALUES (?, ?)`;

export {
  insertUser,
  deleteUser,
  selectUser,
  selectUsers,
  updateUser,
  getUserByName,
  insertSoftSkills,
  getUserById,
};
