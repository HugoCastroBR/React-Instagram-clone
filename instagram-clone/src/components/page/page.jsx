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
        background-color: ${theme.secondaryColor};
        width: 100vw;
        min-height: 100vh;
        max-width: 935px;
        overflow-x: hidden;
        display: flex;
        flex-wrap: no-wrap;
    `;

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

    `
    const StoriesContainer = styled.div`
        height: 60px;
    `

    return(
        <PageContainer>
            <Header/>
            <SectionContainer>
                <MainContentContainer size={[null, 60]}>
                    <StoriesContainer/>
                </MainContentContainer>
            </SectionContainer>
        </PageContainer>
    )
}

export default Page;