import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return <Navbar color={"dark"}>
                <NavbarBrand href={"/"}>Keegan Kochis</NavbarBrand>
            </Navbar>;
    }
}