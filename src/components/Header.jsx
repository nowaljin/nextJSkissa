"use client";
import Link from "next/link";
import { useState } from "react";

const Header = ({ currentPage }) => {
  const [isShow, setIsShow] = useState(false);

  const onClickToggleMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Link className="header-logo" href="/">
          <img src="/images/common/logo-header.png" alt="KISSA" />
        </Link>
        <button className="toggle-menu-button" onClick={onClickToggleMenu} />
        <div className={`header-site-menu ${isShow && "is-show"}`}>
          <nav className="site-menu">
            <ul>
              <li className={currentPage === "concept" ? "is-current" : ""}>
                <Link href="/concept">CONCEPT</Link>
              </li>
              <li className={currentPage === "menu" ? "is-current" : ""}>
                <Link href="/menu">MENU</Link>
              </li>
              <li className={currentPage === "shop" ? "is-current" : ""}>
                <Link href="/shop">SHOP</Link>
              </li>
              <li className={currentPage === "access" ? "is-current" : ""}>
                <Link href="/access">ACCESS</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
