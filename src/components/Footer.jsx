import Link from "next/link";

const Footer = ({currentPage}) => {
  return (
    <footer className="footer">
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
      <a className="footer-logo" href="/">
        <img src="/images/common/logo-footer.png" alt="KISSA" />
      </a>
      <p className="footer-tel">TEL 01-2345-6789</p>
      <p className="footer-time">OPEN Fri-Sun 11:00-16:00</p>
      <p className="copyright">
        <small>&copy;Kissa</small>
      </p>
    </footer>
  );
};

export default Footer;