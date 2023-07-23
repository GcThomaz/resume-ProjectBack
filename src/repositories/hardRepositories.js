const insertHard = `INSERT INTO hardskills(name) VALUES (?)`;
const deleteHard = `DELETE FROM hardskills WHERE id = ?`;
const selectHards = `SELECT * FROM hardskills`;
const selectHard = `SELECT * FROM hardskills WHERE id = ?`;
const updateHard = `UPDATE hardskills SET name = ? WHERE id = ?`;
const getHardByName = `SELECT * FROM hardskills WHERE name = ?`;
const getHardById = `SELECT * FROM hardskills WHERE id = ?`;

export {
  insertHard,
  deleteHard,
  selectHards,
  selectHard,
  updateHard,
  getHardByName,
  getHardById
};