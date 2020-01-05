import React from "react";
interface PropTypes {
  isOpen: boolean;
  toogleButton: () => void;
}

export default function HamubrgerButton(props: PropTypes) {
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
