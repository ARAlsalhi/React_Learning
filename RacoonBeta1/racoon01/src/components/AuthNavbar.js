import "../styles/Auth.css";
import Mark from "../assets/Mark.png";

export default function AuthNavbar() {
  return (
    <nav className="auth-navbar">
      <span className="auth-help">مساعدة</span>

      <img src={Mark} alt="Raccon Logo" className="auth-Mark" />
    </nav>
  );
}
