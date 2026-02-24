import styles from "./Header.module.css";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.header}>
        <h1 onClick={() => navigate("/")}>Event UP</h1>
        <i className="fa-solid fa-align-justify"></i>
      </div>
    </div>
  );
}
