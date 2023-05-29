import logo from "../../assets/icon.svg";

function Header() {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="Finder Pet" />
        <p>Finder Pet</p>
        <p>let's explore your pet!</p>
      </div>

      <nav>
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
