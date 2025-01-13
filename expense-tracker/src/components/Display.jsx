import "./Display.css";
import Heropage from "./Heropage";

const Display = () => {
  return (
    <>
      <h2 style={{ color: "#FFFFFF" }}>Expense Tracker</h2>
      <Heropage />
      <div className="row">
        <div className="col-md-8">
          <h2 style={{ color: "#FFFFFF" }}>Recent Transactions</h2>
          <div></div>
        </div>
        <div classNam="col-md-4">
          <h2 style={{ color: "#FFFFFF" }}>Top Expenses</h2>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Display;
