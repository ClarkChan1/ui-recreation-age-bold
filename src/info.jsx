import "./info.css";
function Info({ infoTitle, infoText }) {
  return (
    <div className="info-container">
      <p className="title">{infoTitle}</p>
      <div className="separator"></div>
      <p className="description">{infoText}</p>
    </div>
  );
}
export default Info;
