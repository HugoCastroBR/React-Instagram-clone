import React from 'react';
import Page from './../../components/page/index';
import  styled  from 'styled-components';
import MainContentContainer from './../../components/MainContentContainer/';



function Home({name,theme}) {

    
    
    const StoriesContainer = styled.div`
        height: 60px;
    `

    const InfosContainer = styled.div`
        margin-top: 24px;
        width: ${props => `${props.size[0]?props.size[0]:614}px`};
        height: ${props => `${props.size[1]}px`};
        background-color: gray;
    `

    const PageMainPostsContainer = styled.div`
        max-width:614px;
        width:100vw;
        display: flex;
        flex-direction: column;
    `

    return(
        <Page theme={theme}>
            <PageMainPostsContainer>

                <MainContentContainer size={[null, 118]} theme={theme}>
                    <StoriesContainer/>
                </MainContentContainer>

                <MainContentContainer size={[null, 1000]} theme={theme}>
                    
                </MainContentContainer>
                <MainContentContainer size={[null, 1000]} theme={theme}>
                    
                </MainContentContainer>
                <MainContentContainer size={[null, 1000]} theme={theme}>
                    
                </MainContentContainer>
            </PageMainPostsContainer>
                
            <InfosContainer size={[293, 56]}>

            </InfosContainer>
        </Page>
    )
}

export default Home;