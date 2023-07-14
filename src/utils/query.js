import util from 'util';
import conexion from '../mysqlStrategy/mysqlStrategy.js';

export const queryAsync = util.promisify(conexion.query).bind(conexion);