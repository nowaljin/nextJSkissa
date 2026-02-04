import React from "react";
import "@/styles/common.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/images/common/logo-footer.png" alt="Kissa footer" />
      </div>
      <div className="footer-tel">TEL: 03-1234-5678</div>
      <div className="footer-time">営業時間: 9:00 - 18:00</div>
      <div className="copyright">&copy; KISSA COFFEE</div>
    </footer>
  );
};

export default Footer;
