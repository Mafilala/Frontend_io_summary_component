import "./main-result.styles.scss";

const MainResult = () => {
  return (
    <div className="main-result-container">
      <h2>Your Result</h2>
      <div className="score">
        <h3>
          <span className="scr">76</span> <span>of 100</span>
        </h3>
      </div>
      <h2>Great</h2>
      <div className="comment">
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default MainResult;
