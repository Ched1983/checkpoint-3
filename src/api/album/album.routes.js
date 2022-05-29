const express = require('express');


const {infoAlbum, infoAlbumId, infoTrackOfAlbum, createAlbum, updateAlbum, deleteAlbum} = require('./album.controller');
const router = express.Router();

router.get('/',[infoAlbum]);
router.get('/:id', [infoAlbumId]);
router.get('/:id/track', [infoTrackOfAlbum]);
router.post('/', [createAlbum]);
router.put('/', [updateAlbum]);
router.delete('/', [deleteAlbum]);

module.exports = router;