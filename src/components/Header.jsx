import Logo from "./Logo";
import NavTab from "./NavTab";
import TeamsTab from "./TeamsTab";

function Header() {
  return (
    <nav>
      <Logo />
      <div>
        <NavTab text="Home" focused={true} />
        <TeamsTab />
        <NavTab text="Success Stories" focused={false} />
        <NavTab text="About Us" focused={false} />
        <NavTab text="Get Involved" focused={false} />
      </div>
      <button className="donate-button">Donate</button>
    </nav>
  );
}

export default Header;
