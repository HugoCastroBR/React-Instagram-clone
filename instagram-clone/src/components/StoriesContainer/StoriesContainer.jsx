import React from 'react';
import styled  from 'styled-components';
import {default as NextStorySVG} from '../../static/img/NextStorie.svg'

function StoriesContainer({children}){
    const StoriesContainer = styled.div`
        height: 118px;

        display: flex;
        align-items: center;

    `

    const StoriesCarouselContainer = styled.div`
        height: 84px;
        min-width: 100%;
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

    const StoryItem = styled.div`
        width: 72px;
        height: 84px;
        margin-left: 12px;
        margin-right: 12px;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;

        h3{
            display: block;
            height: 6px;
            font-size: 10px;
            margin-top: 4px;
        }
    `

    const StoryItemImgContainer = styled.div`
        margin-top: 2px;
        width: 55px;
        height: 55px;
        background-color: transparent;
        border: 2px solid red;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        img{
            border-radius: 50px;
            width:52px;
            height: 52px;
            background-color: blue;
            
        }
    `
    return(
        <StoriesContainer>
            <CarouselControlButton margin={12} rotate={180}/>
                <StoriesCarouselContainer>
                    <StoryItem>
                        <StoryItemImgContainer>
                            <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                        </StoryItemImgContainer>
                        <h3>Teste do teste</h3>
                    </StoryItem>
                </StoriesCarouselContainer>
            <CarouselControlButton  margin={577}/>
        </StoriesContainer>
    )
}

export default StoriesContainer;