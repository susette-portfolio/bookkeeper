import "../assets/css/offer_card.css";

const OfferCard = (props) => {
  return (
    <div className="offer-card">
      <img src={props.cardImage} />
      {props.cardDescription === 1 ? (
        <div className="card-description">
          <span className="secondary-font">QBO/ Xero</span>
          <span className="secondary-font">Excel/ Appfolio</span>
          <span className="secondary-font">Bookkeeping</span>
        </div>
      ) : props.cardDescription === 2 ? (
        <div className="card-description">
          <span className="secondary-font">Catch up and</span>
          <span className="secondary-font">Clean-up Messy</span>
          <span className="secondary-font">Books</span>
        </div>
      ) : (
        <div className="card-description">
          <span className="secondary-font">Set-up Online</span>
          <span className="secondary-font">Accounting</span>
          <span className="secondary-font">System</span>
        </div>
      )}
    </div>
  );
};

export default OfferCard;
