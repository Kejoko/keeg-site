import React from 'react';
import styled from "styled-components";

import logo from "../../resources/placeholder.png"

const Brand = () => {
    return <a href={"/"}>
        <Image src={logo} alt={"KK"}/>
    </a>;
};

export default Brand;

const Image = styled.img`
    height: 85%;
    margin: auto 0;
`;