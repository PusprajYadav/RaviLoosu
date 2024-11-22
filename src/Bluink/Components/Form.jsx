import "./Form.css";

function Form() {
  return (
    <>
      <div className="formdiv">
        <section className="formsec">
          <h1>Interested in This Program? Secure your spot now.</h1>
          <h2 className="formsech2">
            The application is free and takes only 5 minutes to complete.
          </h2>

          <div className="appliform">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Mobile Number" />
            <button className="appliformbtn">Start Appplication</button>
          </div>
          <p>
            By providing your contact details, you agree to
            <span> our Terms of Use & Privacy Policy</span>
          </p>
        </section>
      </div>
    </>
  );
}
export default Form;
