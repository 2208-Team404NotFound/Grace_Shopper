import { getAllAlbums, createAlbums } from './api';
import { useEffect, useState } from 'react'

export const Albums = ({ token }) => {
    const [albums, setAlbums] = useState([]);
    const [artist, setArtist] = useState('');
    const [album_name, setAlbumName] = useState('');
    const [year, setYear] = useState('');
    const [album_price, setPrice] = useState('');
    const [img_url, setImgUrl] = useState('')

    useEffect(() => {
        getAllAlbums()
            .then((results => setAlbums(results)))
    }, []);

    const submitAlbum = async (event) => {
        event.preventDefault();
        const results = await createAlbums(token, artist, album_name, year, album_price, img_url);
        setAlbums(current => [...current, results]);
    };

    return (
        <div>
            <form id='albums-form'>
                <input placeholder='Artist' onChange={event => setArtist(event.target.value)} />
                <input placeholder='Album Name' onChange={event => setAlbumName(event.target.value)} />
                <input placeholder='Year' onChange={event => setYear(event.target.value)} />
                <input placeholder='Price' onChange={event => setPrice(event.target.value)} />
                <button onSubmit={(event) => submitAlbum(event)} type='submit'>Submit</button>
            </form>
            {albums.map(album => {
                return (
                    <div key={album.id} id={album.id}>
                        <h3 className='album-name'>{album.album_name}</h3>
                        <img className='album-cover' src={album.img_url} />
                        <p className='album-artist'>{album.artist}</p>
                        <p className='album-year'>{album.year}</p>
                        <p className='album-price'>{album.album_price}</p>
                    </div>
                )
            })}
        </div>
    )
};
