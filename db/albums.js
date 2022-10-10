const client = require('./client');

const getAllAlbums = async () => {
    try {
        const { rows } = await client.query(`
        SELECT * FROM albums;
        `);

        return rows;
    } catch (error) {
        throw error;
    }
};

const getAlbumsById = async (id) => {
    try {
        const { rows: [album] } = await client.query(`
        SELECT * FROM albums
        WHERE id=$1;
        `, [id]);

        return album;
    } catch (error) {
        throw error;
    }
};

const getAlbumsByName = async (album_name) => {
    try {
        const { rows: [album] } = await client.query(`
        SELECT * FROM albums
        WHERE album_name=$1;
        `, [album_name]);

        return album;
    } catch (error) {
        throw error;
    }
};

const createAlbums = async ({ artist, album_name, year, album_price, img_url }) => {
    try {
        const { rows: [album] } = await client.query(`
        INSERT INTO albums(artist, album_name, year, album_price, img_url)
        VALUES($1, $2, $3, $4, $5)
        ON CONFLICT (album_name) DO NOTHING
        RETURNING *;
        `, [artist, album_name, year, album_price, img_url]);

        return album;
    } catch (error) {
        throw error;
    }
};

const updateAlbums = async ({ id, ...fields }) => {

    const setString = Object.keys(fields).map(
        (key, index) => `"${key}"=$${index + 1}`
    ).join(', ');

    try {
        if (setString.length > 0) {
            const { rows: [album] } = await client.query(`
            UPDATE albums
            SET ${setString}
            WHERE id=${id}
            RETURNING *;
            `, Object.values(fields));

            return album;
        } else return;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllAlbums,
    getAlbumsById,
    getAlbumsByName,
    createAlbums,
    updateAlbums
}




// const attachAlbumsToArtist = async (artist_name) => {
//     try {
//         const { rows: [albums] } = await client.query(`
//         SELECT albums.*, artists.name, artists.id AS artist_album_id,
//         FROM albums
//         JOIN artists on artists.artist_album_id = albums.id
//         WHERE 
//         `)
//     } catch (error) {
//         throw error;
//     }
// };