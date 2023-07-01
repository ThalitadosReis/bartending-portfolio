import Contact from "./Contact";
import Footer from "./Footer";

export default function Workshop() {
  return (
    <div className="workshop">
      <div className="container">
        <div className="full-background">
          <div className="title">
            <h1>Workshops</h1>
          </div>
        </div>
        <div className="my-5 d-flex justify-content-center">
          <div className="workshop-area d-flex flex-wrap">
            <img
              src="https://images.unsplash.com/photo-1621873495914-1c921811e37b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80"
              alt=""
            />
            <div className="workshop-text-area">
              <h3>Shaking & Stirring: Bartending Masterclass</h3>
              <p>
                Get hands-on with our thrilling bartending workshops led by top
                mixologist, Tom Collins! You’ll be mixing, stirring and shaking
                your way to cocktail perfection in no time.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="workshop-area d-flex flex-wrap img2">
            <div className="workshop-text-area">
              <h3>Learn The Art of Mixology</h3>
              <p>
                Discover the secrets behind crafting Insta-worthy cocktails and
                impress your friends with your newfound mixology skills. Trust
                us, making fancy drinks is easier than it looks!
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2>Past Event Magic</h2>
        <div className="grid-gallery">
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
            src="https://images.unsplash.com/photo-1621873495914-1c921811e37b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
