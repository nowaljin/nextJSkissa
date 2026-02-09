"use client";
import Link from "next/link";
import React, { useState } from "react";
import "@/styles/common.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header site-header">
      <div className="header-inner">
        <div className="logo">
          <Link href="/">
            <img src="/images/common/logo-header.png" alt="Kissa" className="header-logo" />
          </Link>
        </div>

        <button
          className="toggle-menu-button"
          aria-controls="site-navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        />

        <nav
          id="site-navigation"
          className={`site-menu header-site-menu ${open ? "is-show" : ""}`}
          aria-hidden={!open}
        >
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
