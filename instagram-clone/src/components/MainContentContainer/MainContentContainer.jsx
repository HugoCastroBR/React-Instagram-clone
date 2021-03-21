import React from 'react';
import styled  from 'styled-components';

function MainContentContainer({children,theme,size}){
    const MainContentContainer = styled.div`
        width: ${props => `${props.size[0]?props.size[0]:614}px`};
        max-width: 614px;
        overflow-x: hidden;
        background-color: ${theme.mainColor};
        border: 1px solid #e1e1e1;
        border-radius: 3px;
        min-height: 10px;
        height: ${props => `${props.size[1]}px`};
        margin-top: 24px;
        overflow-y: hidden;
    `
    return(
        <MainContentContainer size={size}>
            {children}
        </MainContentContainer>
    )
}

export default MainContentContainer;