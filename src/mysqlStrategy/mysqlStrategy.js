
import mysql from  "mysql";

let conexion = mysql.createConnection({
    host : 'localhost',
    database : 'resumeProject',
    user : 'root',
    password : '',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});

export default conexion;