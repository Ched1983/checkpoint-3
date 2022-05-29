const express = require('express');

const router = express.Router();
const {infoTrack, infoTrackId, createTrack, updateTrack, deleteTrack} = require('./track.controller');

router.get('/', [infoTrack]);
router.get('/:id', [infoTrackId]);
router.post('/', [createTrack]);
router.put('/', [updateTrack]);
router.delete('/', [deleteTrack]);

module.exports = router;