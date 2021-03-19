import React from 'react';
import { LightTheme } from './../../themes/light/index';
import styled  from 'styled-components';

const MainHeader = styled.div`
    width:100vw;
    height: 54px;
    background-color: ${LightTheme.mainColor};
`;

function Header() {
    return(
        <div>
            <MainHeader>
                header
            </MainHeader>
        </div>
    )
}

export default  Header;