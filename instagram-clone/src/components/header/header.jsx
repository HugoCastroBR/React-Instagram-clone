import React from "react";
import { LightTheme } from "./../../themes/light/index";
import styled from "styled-components";
import { default as InstagramWrittenLogo } from "../../static/img/InstagramWrittenLogo.png";
import { default as CompassLogo } from "../../static/img/Header_Compass.svg";
import { default as HomeLogo } from "../../static/img/Header_Home.svg";
import { default as HeartLogo } from "../../static/img/Header_Heart.svg";
import { default as MessageLogo } from "../../static/img/Header_Message.svg";
import { default as DefaultUser } from "../../static/img/Default_User.svg";
import { default as LoupeLogo } from "../../static/img/loupe.svg";

const MainHeader = styled.header`
    width: 100vw;
    height: 54px;
    background-color: ${LightTheme.mainColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid #e1e1e1;
    
`;

const Headercontainer = styled.div`
    width: 100vw;
    height: 54px;
    max-width: 935px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`;

const Headeritem = styled.div`
    width: calc(100% / 3);
    display: flex;
    justify-content: ${(props) => props.align || "flex-start"};
`;

const HeaderButton = styled.div`
    width: ${(props) => `${props.size[0]}px` || "22px"};
    height: ${(props) => `${props.size[1]}px` || "22px"};
    margin-right: 0px;
    margin-left: 15px;
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;



const SearchInput = styled.input`
    padding-top: 8px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 8px;
    margin-top: 2px;
    margin-left: -10px;
    top: 0px;
    z-index: 3;
    position: relative;
    width: 199px;
    border: none;
    background-color: transparent;
    
    &:focus {
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
    
`;

const SearchLabelContainer = styled.div`
    top: 12px;
    z-index: 2;
    position: absolute;
    border: 1px solid #aaa;
    height: 28px;
    width: 215px;
    margin-left: -7px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 3px;

    ${SearchInput}:hover & {
        border: 1px solid red;
        background-color: red;
    }

    label {
        margin-top: -2px;
        margin-left: 3px;
        margin-right: 3px;
        color: #666;
    }

    
`;

function Header() {
    return (
        <div>
            <MainHeader>
                <Headercontainer>
                    <Headeritem>
                        <img src={InstagramWrittenLogo} alt="" />
                    </Headeritem>

                    <Headeritem align="center">
                        <form action="">
                            <SearchLabelContainer>
                                <label htmlFor="SearchInput">
                                    <img src={LoupeLogo} width="12px" alt="" />
                                </label>
                                <label htmlFor="SearchInput">Pesquisar</label>
                            </SearchLabelContainer>
                            <SearchInput id="SearchInput" type="text" />
                        </form>
                    </Headeritem>

                    <Headeritem align="flex-end">
                        <HeaderButton size={[22, 22]} image={HomeLogo} />
                        <HeaderButton size={[22, 22]} image={MessageLogo} />
                        <HeaderButton size={[22, 22]} image={CompassLogo} />
                        <HeaderButton size={[22, 22]} image={HeartLogo} />
                        <HeaderButton size={[22, 22]} image={DefaultUser} />
                    </Headeritem>
                </Headercontainer>
            </MainHeader>
        </div>
    );
}

export default Header;
