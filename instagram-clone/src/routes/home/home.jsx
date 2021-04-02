import React from 'react';
import Page from './../../components/page/index';
import  styled  from 'styled-components';
import MainContentContainer from './../../components/MainContentContainer/';
import StoriesContainer from './../../components/StoriesContainer/index';

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

function Home({name,theme}) {

    
    


    /// todo separar os posts em pastas diferentes e etc

    return(
        <Page theme={theme}>
            <PageMainPostsContainer>

                <MainContentContainer size={[null, 118]} margin={[24,0,0,0]} theme={theme}>
                    <StoriesContainer>
                        
                    </StoriesContainer>
                </MainContentContainer>

                <MainContentContainer size={[null, 1000]} margin={[24,24,0,0]} theme={theme}>
                
                </MainContentContainer>
        
            </PageMainPostsContainer>
                
            <InfosContainer size={[293, 56]}>

            </InfosContainer>
        </Page>
    )
}

export default Home;