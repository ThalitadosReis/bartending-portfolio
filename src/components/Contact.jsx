import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container contact-text-area">
        <h2>Get Started</h2>
        <p>
          Ready to shake things up? Choose Bartender Brain for your next
          workshop or event!
        </p>
        <Link to="#">Book Now</Link>
      </div>
    </div>
  );
}
