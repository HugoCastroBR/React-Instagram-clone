import React from "react";
import { LightTheme } from "./../../themes/light/index";
import styled from "styled-components";
import { default as InstagramWrittenLogo } from "../../static/img/InstagramWrittenLogo.png";
import { default as CompassLogo } from "../../static/img/Header_Compass.svg";
import { default as HomeLogo } from "../../static/img/Header_Home.svg";
import { default as HeartLogo } from "../../static/img/Header_Heart.svg";
import { default as MessageLogo } from "../../static/img/Header_Message.svg";
import { default as DefaultUser } from "../../static/img/Default_User.svg";

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

const Header_container = styled.div`
    width: 100vw;
    height: 54px;
    max-width: 935px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Header__item = styled.div`
    width: calc(100% / 3);
    display: flex;
    justify-content: ${props => props.align || "flex-start"};
`;



const Header__Button = styled.div`
    
        width: ${props => `${props.size[0]}px` || "22px"};
        height: ${props => `${props.size[1]}px` || "22px"};
        margin-right: 0px;
        margin-left: 15px;
        background-image: url(${props => props.image});
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;

`

function Header() {
    return (
        <div>
            <MainHeader>
                <Header_container>
                    <Header__item >
                        <img src={InstagramWrittenLogo} alt="" />
                    </Header__item>
                    <Header__item align="center" >
                        <input type="text"/>
                    </Header__item>

                    <Header__item align="flex-end">
                        <Header__Button size={[22,22]} image={HomeLogo}/>
                        <Header__Button size={[22,22]} image={MessageLogo}/>
                        <Header__Button size={[22,22]} image={CompassLogo}/>
                        <Header__Button size={[22,22]} image={HeartLogo}/>
                        <Header__Button size={[22,22]} image={DefaultUser}/>
                    </Header__item>
                </Header_container>
            </MainHeader>
        </div>
    );
}

export default Header;
