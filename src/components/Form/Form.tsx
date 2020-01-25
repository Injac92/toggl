import React from "react";
import { Link } from "react-router-dom";
import FormButton from "../FormButton/FormButton";

interface Props {
  isLogin: boolean;
}

export default function Form(props: Props) {
  const { isLogin } = props;
  const url = "/";
  const textOne = isLogin ? "LOG IN" : "SIGN UP FOR FREE";
  const textTwo = isLogin ? "LOG IN WITH GOOGLE" : "SIGN UP WITH GOOGLE";
  return (
    <div className="form">
      <label className="form__label" htmlFor="email">
        EMAIL ADRESS
      </label>
      <input className="form__input" type="text" id="email" />
      <p className="form__input--error">
        Enter your email adress
        {/*ove error message cemo mzd kasnije i dinamicki ispisivati*/}
      </p>
      <label className="form__label" htmlFor="password">
        SET A PASSWORD
      </label>
      <input className="form__input" type="text" id="password" />
      <p className="form__input--error">Enter your password</p>
      {isLogin ? null : (
        <React.Fragment>
          <label className="form__label" htmlFor="location">
            YOUR LOCATION
          </label>
          <input
            className="form__input"
            id="location"
            defaultValue="United States"
          ></input>
        </React.Fragment>
      )}
      <Link to="" className="form__forgot-password">
        Forgot password?
      </Link>
      <FormButton text={textOne} url={url} color="red" />
      <div className="form__button-divider">
        <span className="form__button-divider--line"></span>
        <span className="form__button-divider--text">OR</span>
        <span className="form__button-divider--line"></span>
      </div>
      <FormButton text={textTwo} url={url} color="white" />
    </div>
  );
}
