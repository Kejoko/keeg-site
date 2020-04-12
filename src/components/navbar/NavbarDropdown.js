import React from 'react';
import styled from "styled-components";

export const NavbarDropdown = styled.div`
    position: absolute;
    margin: 0 1.2rem;
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
    background-color: #2d3436;
    min-width: 50px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
    padding: 12px 0px;
    left: -15px;
    z-index: 1;
`;

export const NavbarDropdownTrigger = styled.a`
    color: #dfe6e9;
    border-bottom: 1px solid transparent;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 0rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    bottom: 2px;

    &:hover {
      color: #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
`;