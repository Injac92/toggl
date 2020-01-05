import React from "react";

export default function HamubrgerMenu(props) {
  const { isOpen, toogleButton } = props;
  const hamubrgerMenuClass = isOpen
    ? "hamburger hamburger--active"
    : "hamburger";
  return (
    <div className={hamubrgerMenuClass} onClick={toogleButton}>
      <div className="hamburger__ham1"></div>
      <div className="hamburger__ham2"></div>
    </div>
  );
}
