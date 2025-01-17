import styles from "./TransactionCard.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { PiPizza } from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsSuitcase2 } from "react-icons/bs";
import { PiGift } from "react-icons/pi";

export default function TransactionCard({ details, handleDelete, handleEdit }) {
  console.log(details);
  return (
    <div className={styles.cointenair}>
      <div className={styles.icon}> 
        {details.category == "food" && <PiPizza />}
        {details.category == "entertainment" && <PiGift />}
        {details.category == "travel" && <BsSuitcase2 />}
      </div>
      <div>
        <h5>{details.title}</h5>
        <p>{details.date}</p>
      </div>

      <p>{`₹${details.price}`}</p>
      <div>
        <button onClick={handleDelete}>
          <IoMdCloseCircleOutline />
        </button>
        <button onClick={handleEdit}>
          <MdOutlineModeEdit />
        </button>
      </div>
    </div>
  );
}
