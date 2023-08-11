import "../assets/css/questions.css";
import QuestionIllustration from "../assets/img/can-u-relate.svg";
import Checker from "../assets/img/checkbox.png";
import Button from "@mui/material/Button";

const PageQuestions = () => {
  return (
    <div className="page-questions">
      <div className="questions-left-col">
        <span className="question-header secondary-font">Can you relate?</span>
        <img src={QuestionIllustration} className="question-illustration" />
      </div>
      <div className="questions-right-col">
        <div className="right-item">
          <img src={Checker} />
          <span className="secondary-font">Messy and unreconciled Books?</span>
        </div>
        <div className="right-item">
          <img src={Checker} />
          <span className="secondary-font">Outdated financial reports?</span>
        </div>
        <div className="right-item">
          <img src={Checker} />
          <span className="secondary-font">Bank accounts unreconciled?</span>
        </div>
        <div className="right-item">
          <img src={Checker} />
          <span className="secondary-font">
            Overstated or Understated Sales and Expense?
          </span>
        </div>
        <div className="right-item">
          <img src={Checker} />
          <span className="secondary-font">
            Delayed reports of your Bookkeeper?
          </span>
        </div>
        <div className="right-item">
          <img src={Checker} />
          <span className="secondary-font">
            Running a good business but always out of budget?
          </span>
        </div>
        <div className="right-item">
          <img src={Checker} />
          <span className="secondary-font">
            Keeping up with your bookkeeping?
          </span>
        </div>
        <div className="right-item">
          <img src={Checker} />
          <span className="secondary-font">
            NO time to manage your bookkeeping?
          </span>
        </div>
        <div className="right-footer">
          <span className="secondary-font">Let me help you.</span>
          <Button
            sx={{
              width: "208px",
              whiteSpace: "nowrap",
              fontSize: "24px",
              backgroundColor: "#1E2189",
              alignSelf: "flex-end",
              color: "#FFBD59",
              fontWeight: "bold",
              marginTop: '16px',
              borderRadius: '12px'
            }}
            variant="contained"
            onClick={()=>window.open("https://calendly.com/susettebinan21/meeting-with-susette?month=2023-08", "_blank")} 
          >
            Yes, Please!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageQuestions;
