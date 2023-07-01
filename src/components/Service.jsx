import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div className="service">
      <div className="container">
        <div className="service-area">
          <img
            src="https://images.unsplash.com/photo-1621873495914-1c921811e37b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80"
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
          <img
            src="https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
