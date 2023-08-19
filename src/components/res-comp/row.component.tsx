import "./row.styles.scss";
const Row = ({ prop }) => {
  const { category, score, icon } = prop;
  console.log(icon);
  return (
    <div className={`row ${category}`}>
      <div className="left">
        <img src={icon} />
        <h3>{category}</h3>
      </div>
      <div className="right score_container">
        <p>
          {`${score}   `}
          <span>/ 100</span>
        </p>
      </div>
    </div>
  );
};

export default Row;
