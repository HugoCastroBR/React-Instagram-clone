import React from 'react';
import Header from '../header';
import styled  from 'styled-components';



function Page({children,theme}){
    const PageContainer = styled.div`
        background-color: ${theme.secondaryColor};
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const SectionContainer = styled.div`
        background-color: ${theme.mainColor};
        width: 100vw;
        height: 100vh;
        max-width: 935px;
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