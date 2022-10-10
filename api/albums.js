const express = require('express');
const albumsRouter = express.Router();
const { requireUser } = require('./utils');
const {
    getAllAlbums,
    getAlbumsById,
    getAlbumsByName,
    createAlbums,
    updateAlbums
} = require('../db');

albumsRouter.get('/', async (req, res) => {
    try {
        const allAlbums = await getAllAlbums();

        res.send(allAlbums);
    } catch (error) {
        throw error;
    }
});

albumsRouter.post('/', async (req, res) => {
    const { artist, album_name, year, album_price, img_url } = req.body;

    try {
        if (await getAlbumsByName(artist)) {
            res.send({
                message: `${album_name} already exists, please be more creative`,
                name: 'Album Exists Error'
            });
        } else {
            const newAlbum = await createAlbums({ artist, album_name, year, album_price, img_url });
            res.send(newAlbum);
        }

    } catch (error) {
        throw error;
    }
});

albumsRouter.patch('/:album_id', async (req, res) => {
    const { album_id } = req.params;
    const { artist, album_name, year, album_price, img_url } = req.body;
    const updateFields = {};

    updateFields.id = album_id;
    if (artist) {
        updateFields.artist = artist;
    }

    if (album_name) {
        updateFields.album_name = album_name;
    }

    if (year) {
        updateFields.year = year;
    }

    if (album_price) {
        updateFields.album_price = album_price;
    }

    try {
        if (!(await getAlbumsById(album_id))) {
            res.send({
                message: 'Album not found',
                name: 'Album not found error'
            });

        } else if (await getAlbumsByName(album_name)) {
            res.send({
                message: `${album_name} already exists, please be more creative`,
                name: 'Album Exists Error'
            });

        } else {
            const album = await updateAlbums(updateFields);
            res.send(album);
        }
    } catch (error) {
        throw error;
    }
});

module.exports = albumsRouter;