// import VerifiedVideo from "../../Assets/verified.mp4";
import VerifiedVideo from "../../Assets/green.mp4";
import "./Verified.css";

function Verified() {
  return (
    <>
      <section className="certifiedsection">
        <h1 className="verifiedh1">
          Collaboration With Innovators Shaping The Future Of <br />
          <span>Tech Learning</span>
        </h1>

        <div className="verifiedVideoContainer">
          <video
            className="verifiedVideo"
            src={VerifiedVideo}
            autoPlay
            loop
            muted
          />
        </div>
      </section>
    </>
  );
}

export default Verified;
