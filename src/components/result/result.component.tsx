import "./result.styles.scss";
import MainResult from "../main-result/main-result.component";
import Summmary from "../summary/summary.component";

const Result = () => {
  return (
    <div className="result-container">
      <MainResult />
      <Summmary />
    </div>
  );
};

export default Result;
