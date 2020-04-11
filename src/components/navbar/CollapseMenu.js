import React from 'react';
import styled from "styled-components";

import {useSpring, animated} from "react-spring";

const CollapseMenu = (props) => {
    const {open} = useSpring({open: props.openState ? 0 : 1});

    if (props.openState === true) {
        return <CollapseWrapper style={{
            transform: open.interpolate(
                {range: [0, 0.2, 0.3, 1], output: [0,-20, 0, -200]}
                ).interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}>
            <NavLinks>
                <li><NameLink href={"/"}>Keegan Kochis</NameLink></li>
                <li><PageLink href={"/about"}>About</PageLink></li>
                <li><PageLink href={"/photos"}>Photos</PageLink></li>
                <li><PageLink href={"/blog"}>Blog</PageLink></li>
                <li><PageLink href={"/contact"}>Contact</PageLink></li>
                <li><PageLink href={"/fun"}>Fun</PageLink></li>
            </NavLinks>
        </CollapseWrapper>;
    }

    return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NameLink = styled.a`
    font-size: 1.8rem;
    font-family: 'Share';
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
    }
`;

const PageLink = styled.a`
    font-size: 1.4rem;
    font-family: sans-serif;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
    }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
  }
`;