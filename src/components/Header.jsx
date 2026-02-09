"use client";
import Link from "next/link";
import React from "react";
import "@/styles/common.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <Link href="/">
            <img src="/images/common/logo-header.png" alt="Kissa" className="header-logo" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link href="/concept">Concept</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/access">Access</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
