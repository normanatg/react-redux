import React from 'react';
import Category from './category';
import './Categories.css';
import SearchContainer from '../../widgets/containers/search';
import Media from '../../playlist/component/media';


function Categories(props){
    return (
        <div className="Categories">
        <SearchContainer/>
            {
                props.search.map((item) => {
                    return <Media openModal={props.handleModalOpen} {...item.toJS()} key={item.get('id')} />
                })
            }
            {
                props.categories.map((item)=>{
                    return (
                        <Category
                            handleModalOpen={props.handleModalOpen}
                            key={item.get('id')} 
                            {...item.toJS()}
                        />
                    )
                })
            }
        </div>
    )
}

export default Categories