import React from 'react';
import Header from '../header';
import styled  from 'styled-components';


const PageContainer = styled.div`
        background-color: ${(props) => props.theme.secondaryColor};
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    `;

    const SectionContainer = styled.div`
        background-color: ${(props) => props.theme.secondaryColor};
        width: 100vw;
        min-height: 100vh;
        max-width: 935px;
        overflow-x: hidden;
        display: flex;
        flex-wrap: no-wrap;
        justify-content: space-between;
    `;


function Page({children,theme}){
    
    return(
        <PageContainer theme={theme}>
            <Header/>
            <SectionContainer theme={theme}>
                {children}
            </SectionContainer>
        </PageContainer>
    )
}

export default Page;