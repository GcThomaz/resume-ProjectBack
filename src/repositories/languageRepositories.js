const insertLanguage = `INSERT INTO language(name) VALUES (?)`;
const deleteLanguage = `DELETE FROM language WHERE id = ?`;
const selectLanguages = `SELECT * FROM language`;
const selectLanguage = `SELECT * FROM language WHERE id = ?`;
const updateLanguage = `UPDATE language SET name = ? WHERE id = ?`;
const getLanguageByName = `SELECT * FROM language WHERE name = ?`;
const getLanguageById = `SELECT * FROM language WHERE id = ?`;

export {
  insertLanguage,
  deleteLanguage,
  selectLanguages,
  selectLanguage,
  updateLanguage,
  getLanguageByName,
  getLanguageById
};