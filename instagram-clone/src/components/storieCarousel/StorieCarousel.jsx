import React, { useState } from "react";
import { default as NextStorySVG } from "../../static/img/NextStorie.svg";
import StorieItem from "./../storieItem/index";
import styled from "styled-components";

const StorieCarouselContainer = styled.div`
    height: 118px;
    display: flex;
    align-items: center;
`;

const StoriesCarouselContainer = styled.div`
    height: 84px;
    display: flex;
    padding-left: 12px;
    padding-right: 12px;
    width: 100vw;
    transform: translateX(${(props) => `${props.next}px`});
    z-index: 1;
`;

const CarouselControlButton = styled.button`
    z-index: 2;
    position: absolute;
    margin-left: ${(props) => `${props.margin ? props.margin : 0}px`};
    width: 22px;
    height: 22px;
    border-radius: 50px;
    overflow: hidden;
    cursor: pointer;
    background-image: url(${NextStorySVG});
    background-color: transparent;
    border: 0px solid white;
    box-shadow: 0px 0px 5px 0.1px #b6b6b6, 0px 0px 1px 1px white,
        inset 0px 0px 0px 2px white;
    transform: rotate(${(props) => `${props.rotate ? props.rotate : 0}deg`});
    transition: 1s;
`;

function HandleCarouselNextAction(event, state, setStories,number) {
    event.preventDefault();
    setStories(state + (number * -90));

    let refreshingCount = 0
    const refreshing = setInterval(() =>{
        refreshingCount ++
        setStories(state + (number * -refreshingCount));
        if(refreshingCount === 90){
            clearInterval(refreshing)
        }
    }
    ,3)
    

}

function StorieCarousel() {
    const [stories, setStories] = useState(0);
    const StoriesVar = 6 // numero de stories a passar
    
    if(stories === 0){
        return (
            <StorieCarouselContainer>
                
                <StoriesCarouselContainer next={stories}>
                    {/* Espaço para 7 Stories */}
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                </StoriesCarouselContainer>
                <CarouselControlButton
                    className="nextbutn"
                    margin={577}
                    onClick={(event) => {
                        HandleCarouselNextAction(event, stories, setStories, StoriesVar);
                    }}
                />
            </StorieCarouselContainer>
        );
    }else{
        return (
            <StorieCarouselContainer>
                <CarouselControlButton margin={12} rotate={180} 
                onClick={(event) => {
                    HandleCarouselNextAction(event, stories, setStories, -StoriesVar);
                }}
                />
                <StoriesCarouselContainer next={stories}>
                    {/* Espaço para 7 Stories */}
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                    <StorieItem />
                </StoriesCarouselContainer>
                <CarouselControlButton
                    className="nextbutn"
                    margin={577}
                    onClick={(event) => {
                        HandleCarouselNextAction(event, stories, setStories, StoriesVar);
                    }}
                />
            </StorieCarouselContainer>
        );
    }
    /// se numero de stories for menor q 7 nao exibir o next
}

export default StorieCarousel;
