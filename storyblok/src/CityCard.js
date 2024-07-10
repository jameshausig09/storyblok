import "./CityCard.css";

const CityCard = ({ name, temp, imageSrc }) => (
  <div
    className="CityCard"
    style={{
      backgroundColor:
        temp >= 30 ? "#ffaa48" : temp >= 16 ? "#87cefa" : "#d3d3d3",
    }}
  >
    <div className="CityCard-content">
      {!!name && <p className="CityCard-name">{name}</p>}
      {!!temp && <p className="CityCard-temp">{Math.round(temp)} °</p>}
    </div>
    {!!imageSrc && (
      <div className="CityCard-image">
        <img src={imageSrc} alt="weather condition" />
      </div>
    )}
  </div>
);

export default CityCard;
