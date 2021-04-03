import React from 'react';
import styled from "styled-components";


const UserImageStyle = styled.img`
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    border-radius: 50%;
`
function UserImage({size,src,alt = ""}){
    return(
        <UserImageStyle size={size} src={src} alt={alt}/>
    )
}

export default UserImage;
