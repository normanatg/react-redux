import React from 'react';
import MediaContainer from '../container/media';

function Playlist (props){
    return(
        <div>
            {
                props.playlist.map((mediaId)=>{
                    return <MediaContainer handleModalOpen={props.handleModalOpen} id={mediaId} key={mediaId}/>
                })
            }
        </div>
    );
}

export default Playlist;