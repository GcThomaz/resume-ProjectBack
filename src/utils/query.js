import util from 'util';

export const queryAsync = util.promisify(conexion.query).bind(conexion);