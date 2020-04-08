import React from 'react';
import styled from "styled-components";

import logo from "../../resources/placeholder.png"

const Brand = () => {
    return <Image src={logo} alt={"KK"}/>
};

export default Brand;

const Image = styled.img`
    height: 85%;
    margin: auto 0;
`;