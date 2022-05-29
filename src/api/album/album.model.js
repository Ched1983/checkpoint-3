const connection = require('../../../db.config');

class AlbumModel {
    async getAlbum(){
        try{
            const resultat = await connection.promise().query('SELECT * FROM album');
            return resultat[0];
        }
        catch (error){
            throw error;
        }
    }
    async getAlbumId(id){
        try{
            const resultat = await connection.promise().query('SELECT * FROM album WHERE id = ?', [id]);
            return resultat[0];
        }
        catch (error){
            throw error;
        }
    }
    async getTrackOfAlbum(id){
        try{
            const resultat = await connection.promise().query('SELECT * FROM track WHERE id= ?', [id]);
            return resultat[0];
        }
        catch (error){
            throw error;
        }
    }
    async postAlbum(id, title, genre, picture, artist) {
        try {
            const resultat = await connection.promise().query('INSERT INTO album (id, title, genre, picture, artist) VALUES (?, ?, ?, ?, ?)', [id, title, genre, picture, artist])
            return resultat[0];
        }
        catch (error){
            throw error;
        }
    }
    async putAlbum(id, title, genre, picture, artist) {
        try {
            const resultat = await connection.promise().query('UPDATE album SET title=?, genre=?, picture=?, artist=?) WHERE id=?', [id, title, genre, picture, artist])
            return resultat[0];
        }
        catch (error){
            throw error;
        }
    }
    async deleteAlbum(id) {
        try {
            const resultat = await connection.promise().query('DELETE FROM album WHERE id = ?', [id])
            return resultat[0];
        }
        catch (error){
            throw error;
        }
    }
}
module.exports = new AlbumModel();