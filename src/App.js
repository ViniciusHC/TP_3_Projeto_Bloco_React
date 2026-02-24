import styles from "./App.module.css";
import Header from "./Header/Hearder";
import { useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.navegacao}>
        <button onClick={() => navigate("/cadastroEventos")}>
          Cadastrar Evento
        </button>
        <button onClick={() => navigate("/listaEventos")}>Listar Evento</button>
      </div>
    </div>
  );
}
