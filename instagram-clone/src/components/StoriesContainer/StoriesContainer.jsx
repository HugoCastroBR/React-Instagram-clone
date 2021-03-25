import React from 'react';
import styled  from 'styled-components';
import StorieCarousel from '../storieCarousel';



const StoriesContainerItem = styled.div`
    height: 118px;

    display: flex;
    align-items: center;

`



function StoriesContainer({children}){

    return(
        <StoriesContainerItem>
            <StorieCarousel/>
        </StoriesContainerItem>
    )
}

export default StoriesContainer;