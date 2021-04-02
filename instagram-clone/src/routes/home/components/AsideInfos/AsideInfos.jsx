import React from 'react';
import styled from "styled-components";
import UserImage from './../../../../components/UserImage/UserImage';



const AsideInfosContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: center;

`



function AsideInfos(){
    return(
        <AsideInfosContainer>
            <div>
                <UserImage size='56' src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
            </div>
        </AsideInfosContainer>
    )
}

export default AsideInfos;