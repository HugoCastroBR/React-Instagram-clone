import React from "react";
import styled from "styled-components";

const StoryItem = styled.div`
    width: 72px;
    height: 84px;
    margin-left: 3px;
    margin-right: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    img {
        border-radius: 50px;
        width: 52px;
        height: 52px;
        background-color: blue;
    }
`;

function StorieItem({imgSrc, user}) {
    return (
        <StoryItem>
            <StoryItemImgContainer>
                <img
                    src={imgSrc}
                    alt=""
                />
            </StoryItemImgContainer>
            <h3>{user}</h3>
        </StoryItem>
    );
}

export default StorieItem;
