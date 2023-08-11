import AboutHer from "../assets/img/about_image.png";
import "../assets/css/about.css";
import Button from "@mui/material/Button";

const PageAbout = () => {
  return (
    <div className="page-about">
      <img src={AboutHer} className="about-img" />
      <div className="about-description">
        <span className="description-title primary-font">ABOUT ME</span>
        <p className="description-text secondary-font">
          With a passion for numbers and a robust background in finance and
          accounting, I offer a unique blend of expertise to the world of
          bookkeeping.
        </p>
        <p className="description-text secondary-font">
          Currently, I have been providing my services to business owners,
          especially those in the service-based and real estate industries in
          the USA, for nearly a year.
        </p>
        <p className="description-text secondary-font">
          Having spent 5 years in the finance and accounting field, attending
          masterclasses and rigorous training sessions, I have built a solid
          foundation that enables me to excel in my field
        </p>
        <p className="description-text secondary-font">
          Let's collaborate and achieve success!
        </p>
        <Button
          sx={{
            width: "min-content",
            whiteSpace: "nowrap",
            backgroundColor: "#1E2189",
            marginTop: "36px",
            color: "#FFBD59",
            fontWeight: "bold",
          }}
          variant="contained"
          onClick={()=>window.open("https://drive.google.com/file/d/1zIZNMJv7yede80s5jEVQI20ji2TEVugG/view", "_blank")} 
        >
          My Resume
        </Button>
      </div>
    </div>
  );
};

export default PageAbout;
