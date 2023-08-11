import "../assets/css/process_card.css";

const ProcessCard = (props) => {
  return (
    <div className="process-card">
      {props.onCardNumber}
      <div className="card-body">
        {props.onCardIcon}
        <span className="body-text secondary-font">{props.onCardDescription}</span>
      </div>
    </div>
  );
};

export default ProcessCard;
