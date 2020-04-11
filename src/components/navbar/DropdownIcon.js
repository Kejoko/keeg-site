import React from 'react';
import styled from "styled-components";

const DropdownIcon = (props) => {
    return <Wrapper>
        <div className={props.openState ? "open" : "closed"}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
        </div>
    </Wrapper>;
}

export default DropdownIcon;

const Wrapper = styled.div`
  position: absolute;
  padding-top: .7rem;
  cursor: pointer;
  display: block;

  & span {
    display: block;
    position: absolute;
    width: .9rem;
    height: .2rem;
    margin-bottom: 0rem;
    top: -11px;
    transition: all ease-in-out 0.2s;
  }

  .closed span:nth-child(1) {
    background: #dfe6e9;
    left: 48px;
    transform: rotate(45deg);
  }
  
  .closed span:nth-child(2) {
    background: #dfe6e9;
    left: 54px;
    transform: rotate(-45deg);
  }
  
  .open span:nth-child(1) {
    background: #fdcb6e;
    width: 1.1rem;
    left: 51px;
    transform: rotate(45deg);
  }
  
  .open span:nth-child(2) {
    background: #fdcb6e;
    width: 1.1rem;
    left: 51px;
    transform: rotate(-45deg);
  }
`;