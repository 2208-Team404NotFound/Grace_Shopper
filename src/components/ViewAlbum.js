import React from 'react';

export const ViewAlbum = () => {
    return (

        <div className='album-grid-full-display-cotainer'>
            <div className='album-grid-full-display'>
            
                <img className='album-cover-full-display' src='https://static.qobuz.com/images/covers/ka/93/zzn6saqkx93ka_600.jpg' />

                <div className="line-display">
                    <p className="mini-title">Artist:&nbsp;</p>
                    <p className="mini-title-description">&nbsp;Bladee</p>
                </div>

                <div className="line-display">
                    <p className="mini-title">Album:&nbsp;</p>
                    <p className="mini-title-description">&nbsp;333</p>
                </div>

                <div className="line-display">
                    <p className="mini-title">Year:&nbsp;</p>
                    <p className="mini-title-description">&nbsp;2022</p>
                </div>
                
                <div className="line-display">
                    <p className="mini-title">Label:&nbsp;</p>
                    <p className="mini-title-description">&nbsp;YEAR0001</p>
                </div>
                
                <div className="line-display">
                    <p className="mini-title">Price:&nbsp;</p>
                    <p className="mini-title-description">&nbsp;$9.99</p>
                </div>

                <br></br>
                <br></br>
                
                <div className="line-display">
                    <p className="mini-title">Track list:</p>
                </div>

                <div className='list-display'>
                    <ol>
                        <li><p>Wings in Motion</p></li>
                        <li><p>Don't Worry</p></li>
                        <li><p>Keys to the City</p></li>
                        <li><p>Hero of My Story 3style3</p></li>
                        <li><p>100s</p></li>
                        <li><p>Mean Girls</p></li>
                        <li><p>Innocent of All Things</p></li>
                        <li><p>Reality Surf</p></li>
                        <li><p>Noblest Strivev</p></li>
                        <li><p>It Girl</p></li>
                        <li><p>Oh Well</p></li>
                        <li><p>Valerie</p></li>
                        <li><p>Finder</p></li>
                        <li><p>Exstasia</p></li>
                        <li><p>Only One</p></li>
                        <li><p>Swan Lakev</p></li>
                    </ol>
                </div>

            </div>
        </div>

    );
};