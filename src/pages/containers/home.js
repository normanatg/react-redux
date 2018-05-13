import React, { Component } from 'react';
import {connect} from 'react-redux';
import {List as list} from 'immutable';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related-layout';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/component/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component{
    handleModalOpen = (id) => {
        this.props.dispatch({
            type:'OPEN_MODAL',
            payload:{
                mediaId: id
            }
        })
    }
    handleModalToggle = (event) => {
        this.props.dispatch({
            type:'CLOSE'
        })
    }
    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Related/>
                    <Categories 
                        handleModalOpen={this.handleModalOpen}
                        categories={this.props.categories}
                        search={this.props.search}
                    />
                    {
                        this.props.modal.get('visibility') &&
                            <ModalContainer>
                                <Modal handleModalClose={this.handleModalToggle}>
                                    <VideoPlayer
                                        id={this.props.modal.get('mediaId')}
                                    />
                                </Modal>
                            </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

function mapStateToProps(state, props){
    const categories = state.get('data').get('categories').map((id)=>{
        return state.get('data').get('entities').get('categories').get(id);
    })
    let searchResults = list()
    const search = state.get('data').get('search');
    if(search){
        const mediaList = state.get('data').get('entities').get('media');
        searchResults = mediaList.filter((item) => (
            item.get('author').toLowerCase().includes(search.toLowerCase())
        )).toList();
    }
    return {
        categories: categories,
        search: searchResults,
        modal: state.get('modal')
    }
}

export default connect(mapStateToProps)(Home);