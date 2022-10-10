import { getAllAlbums, createAlbums } from './api';
import { useEffect, useState } from 'react'

export const Albums = ({ token }) => {
    const [albums, setAlbums] = useState([]);
    const [artist, setArtist] = useState('');
    const [albumName, setAlbumName] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        getAllAlbums()
            .then((results => setAlbums(results)))
    }, []);

    const submitAlbum = async (event) => {
        event.preventDefault();
        const results = await createAlbums(token, artist, albumName, year, price);
        setAlbums(current => [...current, results]);
    };

    return (
        <div>
            <form id='albums-form'>
                <input placeholder='Artist' onChange={event => setArtist(event.target.value)} />
                <input placeholder='Album Name' onChange={event => setAlbumName(event.target.value)} />
                <input placeholder='Year' onChange={event => setYear(event.target.value)} />
                <input placeholder='Price' onChange={event => setPrice(event.target.value)} />
                <button onClick={(event) => submitAlbum(event)}>Submit</button>
            </form>
            {albums.map(album => {
                return (
                    <div key={album.id} id={album.id}>
                        <h1>{album.albumName}</h1>
                        <p>{album.artist}</p>
                        <p>{album.year}</p>
                        <p>{album.price}</p>
                    </div>
                )
            })}
        </div>
    )
};
