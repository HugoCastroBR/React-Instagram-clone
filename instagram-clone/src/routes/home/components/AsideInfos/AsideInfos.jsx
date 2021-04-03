import React from 'react';
import styled from "styled-components";
import UserImage from './../../../../components/UserImage/UserImage';



const AsideInfosContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: center;

`

const YourUserInfos = styled.div`
    margin-top: 6px;
    width: 295px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 56px;

    & a{
        margin-top: 20px;
        text-decoration: none;
        color: #0095f6;
        font-size: 12px;
        margin-right: 16px;
    }

`
const MainInfos = styled.div`
    width: 245px;
    height: 56px;
    display: flex;
    align-items: center;
    & div:first-child{
        width: 56px;
    }
    & div:last-child{
        margin-left: 6px;
        display: flex;
        flex-direction: column;
    }
    
`

const SuggestedPeoples = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    & :first-child{
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        & a{
            
            display: flex;
            width: 100px;
            text-decoration: none;
            color: black;
            justify-content: flex-end;
            margin-left: 30px;
            
        }
    }

`

const SuggestedPeoplesList = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
`

const SuggestedPeopleStyle = styled.div`
    display: flex;
    height: 40px;
    width: 100%;
    background-color: red;
`

const SuggestedMainInfos = styled.div`
    width: 245px;
    height: 40px;
    display: flex;
    align-items: center;
    & div:first-child{
        width: 32px;
    }
    & a:last-child{
        margin-left: 6px;
        display: flex;
        flex-direction: column;
        background-color: #0095f6;
    }
    `

function SuggestedPeople(){
    return(
        <SuggestedPeopleStyle>
            <SuggestedMainInfos>
                    <div>
                        <UserImage size='32' src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                    </div>
                    <div>
                        <span><b>Hugo Castro</b></span>
                        <span>Hugo</span>
                    </div>
                </SuggestedMainInfos>
                    <a href="/">Seguir</a>
        </SuggestedPeopleStyle>
    )
}

function AsideInfos(){
    return(
        <AsideInfosContainer>
            <YourUserInfos>
                <MainInfos>
                    <div>
                        <UserImage size='56' src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                    </div>
                    <div>
                        <span><b>Hugo Castro</b></span>
                        <span>Hugo</span>
                    </div>
                </MainInfos>
                    <a href="/">Mudar</a>
            </YourUserInfos>
            <SuggestedPeoples>
                <div>
                    <span>Sugestões para você</span>
                    <a href="/"><b>Ver tudo</b></a>
                </div>
                <SuggestedPeoplesList>
                    <SuggestedPeople/>
                </SuggestedPeoplesList>
            </SuggestedPeoples>
        </AsideInfosContainer>
    )
}

export default AsideInfos;