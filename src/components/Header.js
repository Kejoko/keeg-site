import React, {Component} from 'react';
import Navbar from "./navbar/Navbar";

import HeaderStyle from "../styles/HeaderStyle";
import FontStyles from "../styles/Fonts";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navbarOpen: false
        }
    }

    render() {
        return <>
            <Navbar openState={this.state.navbarOpen} toggleNavbar={() => this.setState({navbarOpen: !this.state.navbarOpen})}/>
            <HeaderStyle/>
            <FontStyles/>
         </>;
    }
}