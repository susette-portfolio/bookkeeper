import "../assets/css/landing.css";
import Button from '@mui/material/Button';

const PageLanding = () => {
  return (
    <div className="page-landing">
      <span className="secondary-font landing-greetings">Hi there ...</span>
      <div className="landing-display-name primary-font">
        <span>SUSETTE</span>
        <span>BINAN</span>
      </div>
      <span className="secondary-font landing-greetings">I'm a Freelance Bookkeeper</span>
      <p className="secondary-font landing-sub-greetings">Helping real estate and service-based businesses by creating timely and accurate financial reports.</p>
      <Button sx={{width:'min-content', whiteSpace:'nowrap', backgroundColor:'#1E2189', marginTop:'36px', fontWeight:'bold'}} variant="contained">Book a Call</Button>
    </div>
  );
};

export default PageLanding;
