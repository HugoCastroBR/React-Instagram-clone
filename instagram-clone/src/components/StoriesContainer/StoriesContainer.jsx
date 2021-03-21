import React from 'react';
import styled  from 'styled-components';

function StoriesContainer({children}){
    const StoriesContainer = styled.div`
        height: 118px;
        background-color: red;
        display: flex;
        align-items: center;
    `

    const StoriesCarouselContainer = styled.div`
        height: 84px;
        min-width: 100%;
        background-color: blue;
    `

    const CarouselControlButton = styled.button`
        position: absolute;
        margin-left: ${props =>`${props.margin?props.margin:0}px`};
        width: 25px;
        height: 25px;
        cursor: pointer;
    `
    return(
        <StoriesContainer>
            <CarouselControlButton margin={12}/>
                <StoriesCarouselContainer>

                </StoriesCarouselContainer>
            <CarouselControlButton  margin={577}/>
        </StoriesContainer>
    )
}

export default StoriesContainer;