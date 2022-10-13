import { getAllAlbums, createAlbums } from './api';
import { useEffect, useState } from 'react'

export const Albums = ({ token }) => {
    const [albums, setAlbums] = useState([]);
    const [artist, setArtist] = useState('');
    const [album_name, setAlbumName] = useState('');
    const [year, setYear] = useState('');
    const [album_price, setPrice] = useState('');
    const [img_url, setImgUrl] = useState('');

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
        <>
            <div className='main-body'>

                <form className='search-bar'>
                    <input placeholder='Artist' onChange={event => setArtist(event.target.value)} />
                    <input placeholder='Album Name' onChange={event => setAlbumName(event.target.value)} />
                    <input placeholder='Year' onChange={event => setYear(event.target.value)} />
                    <input placeholder='Price' onChange={event => setPrice(event.target.value)} />
                    <button onSubmit={(event) => submitAlbum(event)} type='submit'>Submit</button>
                </form>

                <div className='album-container'>
                    {albums.map(album => {
                        return (
                            <div className='album-grid' key={album.id} id={album.id}>
                                <img className='album-cover' src={album.img_url} />
                                <h3 className='album-name'>{album.album_name}</h3>
                                <p className='album-artist'>{album.artist}</p>
                                <p className='album-year'>{album.year}</p>
                                <p className='album-price'>{album.album_price}</p>
                                <button className='add-to-cart'>Add to Cart</button>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
};
