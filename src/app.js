require('dotenv').config();
const express = require('express');

const app = express();

const AlbumRouter = require('./api/album/album.routes');
const TrackRouter =require('./api/track/track.routes');

app.use(express.json());
app.use('/api/album', AlbumRouter);
app.use('/api/track', TrackRouter);

module.exports = app;
