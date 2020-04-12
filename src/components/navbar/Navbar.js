import React from 'react';
import styled from "styled-components";
import {useSpring, animated, config} from "react-spring";

import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import Brand from "./Brand";

const Navbar = (props) => {
    const barAnimation = useSpring({
        from: {transform: 'translate3d(0, -10rem, 0)'},
        transform: 'translate3d(0,0,0)'
    });

    const linkAnimation = useSpring({
        from: {transform: 'translate3d(0, 30px, 0)', opacity: 0},
        to: {transform: 'translate3d(0, 0, 0)', opacity: 1},
        delay: 800,
        config: config.wobbly
    });

    return <>
        <NavBar style={barAnimation}>
            <FlexContainer>
                <BurgerWrapper>
                    <BurgerMenu openState={props.openState} toggleBurgerMenu={props.toggleNavbar}/>
                </BurgerWrapper>
                <NavLinks style={linkAnimation}>
                    <NameLink href={"/"}>Keegan Kochis</NameLink>
                    <PageLink href={"/about"}>About</PageLink>
                    <PageLink href={"/photos"}>Photos</PageLink>
                    <PageLink href={"/blog"}>Blog</PageLink>
                    <PageLink href={"/fun"}>Fun</PageLink>
                    <PageLink href={"/contact"}>Contact</PageLink>
                </NavLinks>
                <Brand/>
            </FlexContainer>
        </NavBar>
        <CollapseMenu openState={props.openState}/>
    </>;
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 162.5rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
`;

const NameLink = styled.a`
    color: #ffffff;
    font-family: 'Share';
    text-transform: uppercase;
    font-weight: 700;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    font-size: 2.2rem;

    &:hover {
      color: #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
`;

const PageLink = styled.a`
    color: #dfe6e9;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
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