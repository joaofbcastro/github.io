import "./style.css";

export default function Header() {
  return (
    <header>
      <nav className="header-nav">
        <div className="menu-icon"></div>
        <ul className="links-list">
          <li>
            <a
              target="_blank"
              className="link"
              href="https://www.linkedin.com/in/joaofbcastro/"
            >
              <span className="link-icon linkedin"></span>LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="link"
              href="https://github.com/joaofbcastro"
            >
              <span className="link-icon github"></span>GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="link"
              href="https://discord.com/users/387415608209309697"
            >
              <span className="link-icon discord"></span>Discord
            </a>
          </li>
        </ul>
      </nav>
      <div className="logo-frame">
        <img
          className="logo"
          src="http://github.com/joaofbcastro.png"
          alt="Foto do autor"
        ></img>
      </div>
    </header>
  );
}
