const insertUser = `INSERT INTO user(name, age) VALUES (?, ?)`;
const deleteUser = `DELETE FROM user WHERE id = ?`;
const selectUsers = `SELECT * FROM user`;
const selectUser = `SELECT * FROM user WHERE id = ?`;
const updateUser = `UPDATE user SET name = ?, age = ? WHERE id = ?`;
const getUserByName = `SELECT * FROM user WHERE name = ?`;

export {
    insertUser,
    deleteUser,
    selectUser,
    selectUsers,
    updateUser,
    getUserByName
};