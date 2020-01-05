import React, { Component } from "react";

export default class HamubrgerMenu extends Component {
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
    const hamubrgerMenuClass = this.state.isOpen
      ? "hamburger hamburger--active"
      : "hamburger";
    return (
      <div className={hamubrgerMenuClass} onClick={this.toggleHamburgerMenu}>
        <div className="hamburger__ham1"></div>
        <div className="hamburger__ham2"></div>
      </div>
    );
  }
}
