import React from "react";
import styled from "styled-components";
import UserImage from "../UserImage";


const StoryItem = styled.div`
    width: 72px;
    height: 84px;
    margin-left: 3px;
    margin-right: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    h3 {
        display: block;
        height: 6px;
        font-size: 10px;
        margin-top: 4px;
    }
`;

const StoryItemImgContainer = styled.div`
    margin-top: 2px;
    width: 55px;
    height: 55px;
    background-color: transparent;
    border: 2px solid red;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function StorieItem({imgSrc, user}) {
    return (
        <StoryItem>
            <StoryItemImgContainer>
                <UserImage src={imgSrc} size={52}/>
            </StoryItemImgContainer>
            <h3>{user}</h3>
        </StoryItem>
    );
}

export default StorieItem;
