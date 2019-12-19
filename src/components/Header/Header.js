import React from "react";
import { BASE_PATH } from "../../utils/constants";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <img
          src={`${BASE_PATH}/image/logo-white.png`}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
        <a href="#" className="btn btn-white btn-animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
}
