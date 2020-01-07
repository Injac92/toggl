import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  url: string;
  color?: "white" | "red";
}

FormButton.defaultProps = {
  color: "white"
};

export default function FormButton(props: Props) {
  const { text, url, color } = props;

  return (
    <Link to={url} className={`form-button button-${color}`}>
      {text}
    </Link>
  );
}
