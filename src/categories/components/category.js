import React from 'react';
import Playlist from '../../playlist/component/playlist.js';
import './Category.css';

function Category(props){
    return(
        <div className="Category">
            <p className="Category-description">{props.descriptions}</p>
            <h2 className="Category-title">{props.title}</h2>
                    <Playlist
                        handleModalOpen={props.handleModalOpen}
                        playlist={props.playlist}
                    />
        </div>
    )
}

export default Category;