import React from 'react';

import styled from 'styled-components';

import { MenuOutlined } from '@ant-design/icons';

const HeaderContainer = styled.div`
    background-color: #fff;
    width: 100%;
    bottom-border: #FDE21A;
`




function Header() {
    return(
        <HeaderContainer>
            <MenuOutlined />
        </HeaderContainer>
    )
}

export default Header