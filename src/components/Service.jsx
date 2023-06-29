import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div className="service">
      <div className="container">
        <div className="service-area">
          <img
            src="https://framerusercontent.com/images/eEbdusEqBEMfPozVNa9XUm647s.jpg"
            alt=""
          />
          <div className="service-text-area">
            <h2>Workshops</h2>
            <div className="service-list">
              <h4>Expert Guidance</h4>
              <p>
                Experience hands-on learning from Sven s expert instruction.
              </p>
            </div>
            <div className="service-list">
              <h4>Tailored Content</h4>
              <p>Interactive workshops based on specific themes or topics.</p>
            </div>
            <div className="service-list">
              <h4>Atmosphere</h4>
              <p>
                Create memorable experiences through engaging cocktail
                workshops.
              </p>
            </div>
            <hr />
            <Link to="/workshop" className="more-info">
              More info
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="service-area">
          <img
            src="https://framerusercontent.com/images/1VT2ybma3IdiILoBtvNOndH6fY.jpg?scale-down-to=1024"
            alt=""
          />
          <div className="service-text-area">
            <h2>Private Events</h2>
            <div className="service-list">
              <h4>Bespoke Service</h4>
              <p>
                Cocktail catering, bartending staff, and menu customization.
              </p>
            </div>
            <div className="service-list">
              <h4>Diverse Experience</h4>
              <p>
                Serving weddings, corporate parties, and private celebrations.
              </p>
            </div>
            <div className="service-list">
              <h4>Client Satisfaction</h4>
              <p>
                Delivering professionalism, drink quality, and personalized
                service.
              </p>
            </div>
            <hr />
            <Link to="/events" className="more-info">
              More info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
