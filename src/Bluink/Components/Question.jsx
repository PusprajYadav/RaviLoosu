import "./Ques.css";

function HaveQuestion() {
  return (
    <section className="sectionclass">
      <div className="HaveQuestion">
        <div className="haveque">
          <div className="havequeh1"> Have Any Further Question</div> <br />
          <div className="havequbtn">
            <a href="/">
              <button>Contact Us </button>
            </a>
          </div>
        </div>
        <div className="havequesimg">
          <img
            src="https://juzzit.in/static/media/stick_figure_holding_up_question_mark_300_nwm-removebg-preview.c9f1fcbf462bb92cfa28.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default HaveQuestion;
