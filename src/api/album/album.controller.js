const AlbumModels = require('./album.model');

class AlbumControler {
    async infoAlbum(req, res){
        try {
            const result = await AlbumModels.getAlbum();
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send({ 
                error: error.message,
            });
        }
    }
    async infoAlbumId(req, res) {
        const { id } = req.params;
        try {
            const result = await AlbumModels.getAlbumId(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send({ 
                error: error.message,
            });
        }
    }
    async infoTrackOfAlbum(req, res) {
        const { id } = req.params;
        try {
            const album = await AlbumModels.getTrackOfAlbum(id);
            res.json().status(200).send(album);
        } catch (error) {
            res.status(500).send({ 
                error: error.message, 
            });
        }
    }
    async createAlbum(req, res){
        const { id, title, genre, picture, artist } = req.body;
        try {
        await AlbumModels.postAlbum(id, title, genre, picture, artist);
        res.json().status(201).send('created');
          }
        catch (error) {
        res.status(500).send({ error: error.message });
          }
    }
    async updateAlbum(req, res) {
        const { id, title, genre, picture, artist } = req.body;
        try {
        await AlbumModels.putAlbum(id, title, genre, picture, artist);
        res.status(204).send( 'no content' );
        }
        catch (error) {
        res.status(500).send({ error: error.message})
        }
    }
    async deleteAlbum(req, res) {
        const { id } = req.params;
        try {
        await AlbumModels.deleteAlbum(id);
        res.status(204).send( 'no content' );
        }
        catch (error) {
        res.status(500).send({ error: error.message})
        }
    }
}
module.exports = new AlbumControler();