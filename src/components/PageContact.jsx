import "../assets/css/contact.css";
import QRCode from "../assets/img/QRCode.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const PageContact = () =>{
    return(
        <div className="page-contact">
            <span className="contact-page-header primary-font">LET'S WORK TOGETHER.</span>
            <div className="contact-details">
                <div className="qr-code-details">
                    <img src={QRCode} className="qr-code-img"/>
                    <span className="qr-code-description secondary-font">Scan/Click QR code for free discovery call</span>
                </div>
                <div className="profile-details">
                    <div className="details-item">
                        <span className="item-title primary-font">EMAIL</span>
                        <span className="item-content secondary-font">susettebinan21@gmail.com</span>
                    </div>
                    <div className="details-item">
                        <span className="item-title primary-font">CONTACT NUMBER</span>
                        <span className="item-content secondary-font">(+63) 935 2805 855</span>
                    </div>
                    <div className="details-item">
                        <span className="item-title primary-font">SOCIAL MEDIA</span>
                        <div className="social-media-items">
                            <FacebookIcon sx={{fontSize:'32px', cursor:'pointer'}} onClick={()=>window.open("https://www.facebook.com/profile.php?id=100083012100803", "_blank")} />
                            <LinkedInIcon sx={{fontSize:'32px', cursor:'pointer'}} onClick={()=>window.open("https://www.linkedin.com/in/susette-bi%C3%B1an-361917164/", "_blank")} />
                            <InstagramIcon sx={{fontSize:'32px', cursor:'pointer'}} onClick={()=>window.open("https://www.instagram.com/sbbookkeepingsolutions/", "_blank")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageContact;