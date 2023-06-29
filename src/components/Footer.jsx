import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <img src={logo} alt="" />
        <p>© 2023 Bartender Brain by Sven Steinbrecher</p>
      </div>
    </div>
  );
}
