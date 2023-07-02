import Contact from "./Contact";
import Footer from "./Footer";

export default function Events() {
  return (
    <div className="events">
      <div className="container">
        <div className="title py-5">
          <h1>Private Events</h1>
        </div>
        <div className="events-area">
          <div className="events-text-area">
            <p>
              Welcome to the world of pure mixology magic—where minimalist
              design takes center stage. Dive into the captivating portfolio of
              our solo bartender, expertly crafting splendid concoctions for
              private events.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1621873495914-1c921811e37b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80"
            alt=""
          />
        </div>
        <div className="events-section my-5">
          <h3 className="pb-3">Elegance in Simplicity</h3>
          <div className="events-section-text">
            <p>
              Discover hand-crafted cocktails with a minimalist twist. Our
              master mixologist creates art with their shaker, enticing all with
              striking simplicity. Precision and presentation perfectly
              complement the essence of each carefully curated event.
            </p>
            <p>
              From intimate gatherings to swanky soirées, the ambiance is set
              with a keen focus on minimalism. Join the journey as we lift the
              veil on an exclusive and unforgettable bartending experience,
              breathing life into every glass.
            </p>
          </div>
        </div>
        <div className="container mt-5">
          <h2>Event Highlights</h2>
          <div className="events-gallery">
            <img
              src="https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1604321115296-f4b73745c7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1560512823-829485b8bf24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
