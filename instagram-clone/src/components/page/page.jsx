import React from 'react';
import Header from '../header';
import styled  from 'styled-components';
import { LightTheme } from './../../themes/light/index';

const PageContainer = styled.div`
    background-color: #777;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionContainer = styled.div`
    background-color: ${LightTheme.mainColor};
    width: 100vw;
    height: 100vh;
    max-width: 1000px;
`;


function Page({children}){
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