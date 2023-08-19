import "./summary.styles.scss";
import Row from "../res-comp/row.component";
const Summary = () => {
  const rows = [
    {
      category: "Reaction",
      score: 80,
      icon: "src/assets/images/icon-memory.svg",
    },
    {
      category: "Memory",
      score: 92,
      icon: "src/assets/images/icon-reaction.svg",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "src/assets/images/icon-verbal.svg",
    },
    {
      category: "Visual",
      score: 72,
      icon: "src/assets/images/icon-visual.svg",
    },
  ];

  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <div className="row-container">
        {rows.map((prop) => (
          <Row prop={prop} />
        ))}
      </div>
      <button>Continue</button>
    </div>
  );
};

export default Summary;
