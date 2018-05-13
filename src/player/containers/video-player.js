import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

class VideoPlayer extends Component {
    render(){
        return (
            <VideoPlayerLayout>
                <Title 
                    title={this.props.data.get('title')}/>
                <PlayPause/>
                <Video
                    autoplay={true}
                    src={this.props.data.get('src')}
                />
            </VideoPlayerLayout>
        )
    }
}

function mapStateToProps(state, props){
    return{
        data: state.get('data').get('entities').get('media').get(props.id)
    }
}

export default connect(mapStateToProps)(VideoPlayer);
