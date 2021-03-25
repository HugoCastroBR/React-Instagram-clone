import React from "react";
import styled from "styled-components";

const StoryItem = styled.div`
    width: 72px;
    height: 84px;
    margin-left: 5px;
    margin-right: 5px;
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

function StorieItem() {
    return (
        <StoryItem>
            <StoryItemImgContainer>
                <img
                    src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    alt=""
                />
            </StoryItemImgContainer>
            <h3>Teste do teste</h3>
        </StoryItem>
    );
}

export default StorieItem;
