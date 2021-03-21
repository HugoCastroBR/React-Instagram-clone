import React from 'react';
import Header from '../header';
import styled  from 'styled-components';



function Page({children,theme}){
    const PageContainer = styled.div`
        background-color: ${theme.secondaryColor};
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    `;

    const SectionContainer = styled.div`
        background-color: ${theme.secondaryColor};
        width: 100vw;
        min-height: 100vh;
        max-width: 935px;
        overflow-x: hidden;
        display: flex;
        flex-wrap: no-wrap;
        justify-content: space-between;
    `;



    return(
        <PageContainer>
            <Header/>
            <SectionContainer>
                {children}
            </SectionContainer>
        </PageContainer>
    )
}

export default Page;