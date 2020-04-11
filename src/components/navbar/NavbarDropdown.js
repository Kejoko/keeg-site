import React from 'react';
import styled from "styled-components";

export const NavbarDropdown = styled.div`
    position: absolute;
    display: inline-block;
    bottom: 2px;

    &:hover {
        display: block;
        >div {
            display: block;
        }
    }
`;

export const NavbarDropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
    padding: 12px 16px;
    z-index: 1;
`;