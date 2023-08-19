import "./row.styles.scss";

interface RowProps {
  prop: {
    category: string;
    score: number;
    icon: string;
  };
}
const Row: React.FC<RowProps> = ({ prop }) => {
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
