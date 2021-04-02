import React from 'react';
import styled from "styled-components";


const UserImage_ = styled.img`
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    border-radius: 50%;
`
function UserImage({size,src,alt = ""}){
    return(
        <UserImage_ size={size} src={src} alt={alt}/>
    )
}

export default UserImage;
