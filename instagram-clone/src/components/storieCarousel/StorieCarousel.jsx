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
    box-shadow: 0px 0px 5px 0.1px #b6b6b6, 
                0px 0px 1px 1px white,
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

const StoriesList = [
    {
        id:0,
        user: "hugo castro",
        img:"https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        id:1,
        user: "hugo castro",
        img:"https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        id:2,
        user: "hugo",
        img:"https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    }
]



function StorieCarousel() {
    const [stories_number, setStories_number] = useState(0);
    const Stories_numberVar = 5 // numero de stories_number a passar
    // <StorieItem imgSrc=""/>
    let StorieRender = `
    
    `
    if(stories_number === 0){
        return (
            <StorieCarouselContainer>
    
                <StoriesCarouselContainer next={stories_number}>
                    {/* Espaço para 7 Stories_number */}
                    {StoriesList.map(element => {
                        return <StorieItem imgSrc={element.img} user={element.user}/>
                    })}
                </StoriesCarouselContainer>
                <CarouselControlButton
                    className="nextbutn"
                    margin={577}
                    onClick={(event) => {
                        HandleCarouselNextAction(event, stories_number, setStories_number, Stories_numberVar);
                    }}
                />
            </StorieCarouselContainer>
        );
    }else{
        return (
            <StorieCarouselContainer>
                <CarouselControlButton margin={12} rotate={180} 
                onClick={(event) => {
                    HandleCarouselNextAction(event, stories_number, setStories_number, -Stories_numberVar);
                }}
                />
                <StoriesCarouselContainer next={stories_number}>
                    {/* Espaço para 7 Stories_number */}
                    {StoriesList.map(element => {
                        return <StorieItem imgSrc={element.img} user={element.user}/>
                    })}
                </StoriesCarouselContainer>
                <CarouselControlButton
                    className="nextbutn"
                    margin={577}
                    onClick={(event) => {
                        HandleCarouselNextAction(event, stories_number, setStories_number, Stories_numberVar);
                    }}
                />
            </StorieCarouselContainer>
        );
    }
    /// se numero de stories_number for menor q 7 nao exibir o next
}

export default StorieCarousel;
