import "./heropage.css";
const Heropage = () => {
  return (
    <>
      <div className="heropage">
        <div className="balance">
          <div>
            Wallet Balance:<span style={{ color: "#9DFF5B" }}>$4500</span>
          </div>
          <button className="addbalance">+ Add Income</button>
        </div>
        <div className="expense">
          <div className="balance">
            <div>
              Expenses:<span style={{ color: "#F4BB4A" }}>$500</span>
            </div>
            <button className="addexpense">+ Add Expense</button>
          </div>
        </div>
        <div className="piachart">
          <div className="chart"></div>
          <div className="bars">
            <span style={{ margin: "10px", color: "#a000ff" }}>
              <div className="food"></div>
              Food
            </span>
            <span style={{ margin: "10px", color: "#ff9304" }}>
              <div className="entertainment"></div>
              Entertainment
            </span>
            <span style={{ margin: "10px", color: "#fde006" }}>
              <div className="travel"></div>
              Travel
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heropage;
