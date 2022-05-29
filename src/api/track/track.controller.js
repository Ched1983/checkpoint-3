const TrackModels = require('./track.model');

class TrackController {
    async infoTrack(req, res){
        try{
        const track = await TrackModels.getTrack()
        res.json().status(200).send(track);
        }
        catch (error) {
        res.status(500).send({ error: error.message });
        }
    }
    async infoTrackId(req, res){
        const { id } = req.params;
        try {
        const track = await TrackModels.getTrackId(id);
        res.json().status(200).send(track);
        }
        catch (error) {
        res.status(500).send({ error: error.message });
        }
    }
    async createTrack(req, res){
        const { id, title, youtube_url, id_album } = req.body;
        try {
        await TrackModels.postTrack(id, title, youtube_url, id_album);
        res.json().status(201).send('created');
          }
        catch (error) {
        res.status(500).send({ error: error.message });
          }
    }
    async updateTrack(req, res) {
        const {  id, title, youtube_url, id_album } = req.body;
        try {
        await TrackModels.putTrack( id, title, youtube_url, id_album);
        res.status(204).send( 'no content' );
        }
        catch (error) {
        res.status(500).send({ error: error.message})
        }
    }
    async deleteTrack(req, res) {
        const { id } = req.params;
        try {
        await TrackModels.deleteTrack(id);
        res.status(204).send( 'no content' );
        }
        catch (error) {
        res.status(500).send({ error: error.message})
        }
    }
}
module.exports = new TrackController();