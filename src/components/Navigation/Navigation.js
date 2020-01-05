import React, { Component } from "react";
import logo from "../../images/Group 53@2x.jpg";
import { Link } from "react-router-dom";
import HamubrgerMenu from "../HamburgerButton/HamubrgerButton";
import Menu from "../Menu/Menu";
import MenuModal from "../MenuModal/MenuModal";

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this);
  }

  toggleHamburgerMenu() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }
  render() {
    return (
      <div className="navigation">
        <div className="brand">
          <Link to="#">
            <img className="brand__img" src={logo} alt="logo" />
          </Link>
          <h2 className="brand__h2">toggl clone</h2>
        </div>
        <HamubrgerMenu
          isOpen={this.state.isOpen}
          toogleButton={this.toggleHamburgerMenu}
        />
        <Menu />
        {this.state.isOpen ? <MenuModal isOpen={this.state.isOpen} /> : ""}
      </div>
    );
  }
}
