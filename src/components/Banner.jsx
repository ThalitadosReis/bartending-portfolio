import "./Banner.css";

export default function Banner() {
  return (
    <div className="container" id="home">
      <div className="banner">
        <div className="title">
          <h1>Welcome</h1>
        </div>
        <div className="description">
          <p>
            Get ready for a whirlwind of mixology magic at Bartender Brain by
            Sven Steinbrecher! Experience exceptional service, dazzling drinks,
            and captivating classes like never before.
          </p>
        </div>
      </div>

      <div id="collage">
        <div className="image-grid">
          <div className="image">
            <img
              src="https://images.pexels.com/photos/4762725/pexels-photo-4762725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Image 2"
            />
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/7376924/pexels-photo-7376924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 3"
            />
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/7376769/pexels-photo-7376769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
