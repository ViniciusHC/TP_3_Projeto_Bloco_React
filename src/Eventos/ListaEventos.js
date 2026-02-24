import { useState, useEffect } from "react";
import Header from "../Header/Hearder";
import styles from "./ListaEventos.module.css";
import { useNavigate } from "react-router-dom";

export default function ListaEventos({ listaEventos }) {
  const [buscador, setBuscador] = useState("");
  const navigate = useNavigate();
  const [listaEventosFiltrada, setListaEventosFiltrada] = useState([]);

  useEffect(() => {
    if (buscador.trim() === "") {
      setListaEventosFiltrada([]);
    } else {
      const eventosFiltrados = listaEventos.filter((evento) =>
        evento.name.toLowerCase().includes(buscador.toLowerCase())
      );
      setListaEventosFiltrada(eventosFiltrados);
    }
  }, [buscador, listaEventos, setListaEventosFiltrada]);

  const listaFinal =
    buscador.trim() === "" ? listaEventos : listaEventosFiltrada;

  function formatarData(date) {
    const apenasData = date.split(" ")[0];
    if (apenasData.includes("-")) {
      return apenasData.split("-").reverse().join("/");
    }
    return apenasData;
  }

  function formatarLocal(dadoLocalBruto) {
    return dadoLocalBruto.replace("America/", "");
  }

  return (
    <div>
      <Header />

      <div className={styles.listaEventos}>
        <h1>Eventos Cadastrados</h1>
        <div className="buscador">
          <h3>Buscar Evento</h3>
          <input
            value={buscador}
            onChange={(evt) => setBuscador(evt.target.value)}
            type="text"
            className="buscador"
            placeholder="Nome do Evento"
          ></input>
        </div>

        <div className={styles.containerTabela}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descricao</th>
                <th>Data</th>
                <th>Local</th>
              </tr>
            </thead>
            <tbody>
              {listaFinal.map((evento) => (
                <tr key={evento.id}>
                  <td>{evento.name}</td>
                  <td>{evento.shortDescription}</td>
                  <td>{formatarData(evento.updateTimestamp.date)}</td>
                  <td>{formatarLocal(evento.updateTimestamp.timezone)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="button">
          <button
            onClick={() => {
              navigate("/cadastroEventos");
            }}
          >
            Cadastrar novo evento
          </button>
        </div>
      </div>
    </div>
  );
}
