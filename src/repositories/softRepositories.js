const insertSoft = `INSERT INTO softSkills(name) VALUES (?)`;
const deleteSoft = `DELETE FROM softSkills WHERE id = ?`;
const selectSofts = `SELECT * FROM softSkills`;
const selectSoft = `SELECT * FROM softSkills WHERE id = ?`;
const updateSoft = `UPDATE softSkills SET name = ? WHERE id = ?`;
const getSoftByName = `SELECT * FROM softSkills WHERE name = ?`;
const getSoftById = `SELECT * FROM softSkills WHERE id = ?`;

export {
  insertSoft,
  deleteSoft,
  selectSofts,
  selectSoft,
  updateSoft,
  getSoftByName,
  getSoftById
};