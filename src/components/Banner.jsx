// import video from "../assets/video.mp4";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="container">
      <div id="home">
        <h1>Welcome</h1>
        <div className="description">
          <p>
            Get ready for a whirlwind of mixology magic at Bartender Brain by
            Sven Steinbrecher! Experience exceptional service, dazzling drinks,
            and captivating classes like never before.
          </p>
        </div>
      </div>
    </div>
    /* <video autoPlay muted loop id="player">
        <source src={video} type="video/mp4" />
      </video>

      <div className="container-banner">
        <div className="container d-flex">
          <div className="headline">
            <h2>Welcome to Bartender Brain</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tristique porta ex vel scelerisque. Donec molestie semper est, id
              varius mi convallis ac. Donec eget lobortis eros.
            </p>
            <div className="buttons">
              <a href="#" className="more-info">
                More info
              </a>
              <a href="#">More info</a>
            </div>
          </div>
        </div>
      </div> */
  );
}
