import React from "react";
import styled from "styled-components";
import UserImage from "./../../../../components/UserImage/UserImage";

const AsideInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const YourUserInfos = styled.div`
    margin-top: 6px;
    width: 295px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 56px;

    & a {
        margin-top: 20px;
        text-decoration: none;
        color: #0095f6;
        font-size: 12px;
        margin-right: 16px;
    }
`;
const MainInfos = styled.div`
    width: 245px;
    height: 56px;
    display: flex;
    align-items: center;
    & div:first-child {
        width: 56px;
    }
    & div:last-child {
        margin-left: 6px;
        display: flex;
        flex-direction: column;
    }
`;

const SuggestedPeoples = styled.div`
    display: flex;
    flex-direction: column;
    width: 295px;
    
`;

const SeeAllSuggestContainer = styled.div`
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 13px;

    
`

const SuggestedPeoplesList = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    height: auto;
    width: 295px;
`;

const SuggestedPeopleStyle = styled.div`
    display: flex;
    height: 40px;
    width: 295px;

    align-items: center;
    & a {
        margin-top: 13px;
        height: 32px;
        display: flex;
        flex-direction: column;
        color: #0095f6;
        font-size: 13px;
        text-decoration: none;
    }
`;

const SuggestedMainInfos = styled.div`
    width: 245px;
    height: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    & div:first-child {
        width: 34px;
        margin: 0px;
        height: 34px;
    }
    & div:last-child {
        display: block;
        height: 34px;
        margin: 0px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 12px;
        margin-left: 8px;
        width: 200px;
        overflow-x: hidden;
        overflow-y: hidden;
    }
`;

const SeeAllSuggest = styled.a`
    display: flex;
    width: 100px;
    text-decoration: none;
    color: black;
    justify-content: flex-end;
    margin-right: 4px;
`;

function SuggestedPeople() {
    return (
        <SuggestedPeopleStyle>
            <SuggestedMainInfos>
                <div>
                    <UserImage
                        size="32"
                        src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt=""
                    />
                </div>
                <div>
                    <span>
                        <b>Hugo Castro</b>
                    </span>
                    <span>Suggested to you</span>
                </div>
            </SuggestedMainInfos>
            <a href="/">Seguir</a>
        </SuggestedPeopleStyle>
    );
}

function AsideInfos() {
    return (
        <AsideInfosContainer>
            <YourUserInfos>
                <MainInfos>
                    <div>
                        <UserImage
                            size="56"
                            src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            alt=""
                        />
                    </div>
                    <div>
                        <span>
                            <b>Hugo Castro</b>
                        </span>
                        <span>Hugo</span>
                    </div>
                </MainInfos>
                <a href="/">Mudar</a>
            </YourUserInfos>
            <SuggestedPeoples>
                <SeeAllSuggestContainer>
                    <span>Sugestões para você</span>
                    <SeeAllSuggest href="/">
                        <b>Ver tudo</b>
                    </SeeAllSuggest>
                </SeeAllSuggestContainer>
                <SuggestedPeoplesList>
                    <SuggestedPeople />
                </SuggestedPeoplesList>
            </SuggestedPeoples>
        </AsideInfosContainer>
    );
}

export default AsideInfos;
