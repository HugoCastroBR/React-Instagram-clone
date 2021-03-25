import React from 'react';
import styled  from 'styled-components';
import {default as NextStorySVG} from '../../static/img/NextStorie.svg'
import StorieItem from './../storieItem/index';

function StoriesContainer({children}){
    const StoriesContainer = styled.div`
        height: 118px;

        display: flex;
        align-items: center;

    `

    const StoriesCarouselContainer = styled.div`
        height: 84px;
        min-width: 100%;
        display: flex;
        padding-left: 12px;
        padding-right: 12px;
    `

    const CarouselControlButton = styled.button`
        position: absolute;
        margin-left: ${props =>`${props.margin?props.margin:0}px`};
        width: 22px;
        height: 22px;
        border-radius: 50px;
        overflow:hidden;
        cursor: pointer;
        background-image: url(${NextStorySVG});
        background-color: transparent;
        border: 0px solid white;
        box-shadow: 0px 0px 5px 0.1px #b6b6b6,
                    0px 0px 1px 1px white,
                    inset 0px 0px 0px 2px white;
        transform: rotate(${props =>`${props.rotate?props.rotate:0}deg`});


    `

    
    return(
        <StoriesContainer>
            <CarouselControlButton margin={12} rotate={180}/>
                <StoriesCarouselContainer>
                    {/* Espaço para 7 Stories */}
                    <StorieItem/>
                    <StorieItem/>
                    <StorieItem/>
                    <StorieItem/>
                    <StorieItem/>
                    <StorieItem/>
                    <StorieItem/>
                    
                </StoriesCarouselContainer>
            <CarouselControlButton  margin={577}/>
        </StoriesContainer>
    )
}

export default StoriesContainer;