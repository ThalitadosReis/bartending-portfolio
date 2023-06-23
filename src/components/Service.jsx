import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div className="container my-5" id="service">
      <div className=" d-flex flex-column flex-md-row gap-3">
        <div className="w-md-100">
          <img
            src="https://images.pexels.com/photos/4279101/pexels-photo-4279101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="w-md-75">
          <h3>Workshop</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <Link to="/workshop">More info</Link>
        </div>
      </div>
      <div className=" d-flex flex-column flex-md-row gap-3 my-5" id="bartend">
        <div className="w-md-100">
          <img
            src="https://images.pexels.com/photos/6004589/pexels-photo-6004589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="w-md-75">
          <h3>Bartending</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Link to="/bartending">More info</Link>
        </div>
      </div>
    </div>
  );
}
