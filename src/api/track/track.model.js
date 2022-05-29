const connection = require('../../../db.config');

class TrackModel {
    async getTrack(){
        try{
            const resultat = await connection.promise().query('SELECT * FROM track');
            return resultat[0];
        }
        catch (error){
            throw error;
        }
    }
    async getTrackId(id){
        try{
            const resultat = await connection.promise().query('SELECT * FROM track WHERE id_album = ?', [id]);
            return resultat[0];
        }
        catch (error){
            throw error;
        }
    }
    async postTrack(id, title, youtube_url, id_album) {
        try {
            const resultat = await connection.promise().query('INSERT INTO track (id, title, youtube_url, id_album) VALUES (?, ?, ?, ?)', [id, title, youtube_url, id_album])
            return resultat[0];
        }
        catch (error){
            throw error;
        }
    }
    async putTrack(id, title, youtube_url, id_album) {
        try {
            const resultat = await connection.promise().query('UPDATE track SET title=?, youtube_url=?, id_album=?) WHERE id=?', [id, title, youtube_url, id_album])
            return resultat[0];
        }
        catch (error){
            throw error;
        }
    }
    async deleteTrack(id) {
        try {
            const resultat = await connection.promise().query('DELETE FROM track WHERE id = ?', [id])
            return resultat[0];
        }
        catch (error){
            throw error;
        }
    }
}
module.exports = new TrackModel();