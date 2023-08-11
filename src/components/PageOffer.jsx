import "../assets/css/offer.css";
import OfferCard from "../sub_components/OfferCard";
import FirstCard from "../assets/img/1st_card.svg";
import SecondCard from "../assets/img/2nd_card.svg";
import ThirdCard from "../assets/img/3rd_card.svg";


const PageOffer = () =>{
    return(
        <div className="page-offer">
            <div>
                <span className="offer-title primary-font">WHAT I OFFER?</span>
            </div>
            <div className="card-list">
                <OfferCard cardImage={FirstCard} cardDescription={1}/>
                <OfferCard cardImage={SecondCard} cardDescription={2}/>
                <OfferCard cardImage={ThirdCard} cardDescription={3}/>
            </div>
        </div>
    )
}

export default PageOffer;