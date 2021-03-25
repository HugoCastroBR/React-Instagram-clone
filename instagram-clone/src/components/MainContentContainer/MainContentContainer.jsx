import React from 'react';
import styled  from 'styled-components';

const MainContentContainerItem = styled.div`

        // margin [top, bottom, left , right]

        width: ${props => `${props.size[0]?props.size[0]:614}px`};
        max-width: 614px;
        overflow-x: hidden;
        background-color: ${props => props.theme.mainColor};
        border: 1px solid #e1e1e1;
        border-radius: 3px;
        min-height: 10px;
        height: ${props => `${props.size[1]}px`};

        margin-top: ${props => `${props.margin[0]?props.margin[0]:0}px`};
        margin-bottom: ${props => `${props.margin[1]?props.margin[1]:0}px`};
        margin-left: ${props => `${props.margin[2]?props.margin[2]:0}px`};
        margin-right: ${props => `${props.margin[3]?props.margin[3]:0}px`};
        
        overflow-y: hidden;
    `

function MainContentContainer({children,theme,size,margin = [false,false,false,false]}){
    
    return(
        <MainContentContainerItem size={size} margin={margin} theme={theme}>
            {children}
        </MainContentContainerItem>
    )
}

export default MainContentContainer;