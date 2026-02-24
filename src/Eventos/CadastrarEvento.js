import styles from "./CadastrarEvento.module.css";
import Header from "../Header/Hearder";
import { useNavigate } from "react-router-dom";

export default function CadastrarEvento({
  setListaEventos,
  listaEventos,
  evento,
  setEvento,
}) {
  const navigate = useNavigate();

  function limparFormulario() {
    setEvento({
      id: "",
      name: "",
      shortDescription: "",
      updateTimestamp: {
        timezone: "",
        date: "",
      },
    });
  }

  function salvarEvento(event) {
    event.preventDefault();

    if (
      !evento.name ||
      !evento.updateTimestamp.timezone ||
      !evento.updateTimestamp.date ||
      !evento.shortDescription
    ) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const ultimoID = listaEventos.at(-1);
    const novoId = ultimoID.id++;

    const novoEvento = {
      id: novoId,
      name: evento.name,
      shortDescription: evento.shortDescription,
      updateTimestamp: {
        timezone: evento.updateTimestamp.timezone,
        date: evento.updateTimestamp.date,
      },
    };

    setListaEventos([...listaEventos, novoEvento]);
    alert("Evento salvo com sucesso");
    limparFormulario();
  }

  return (
    <div>
      <Header />
      <div className={styles.cadastrarEvento}>
        <div>
          <h1>Cadastro de Eventos</h1>
          <h3>Preencha as informações abaixo:</h3>
        </div>
        <form className={styles.formulario} onSubmit={salvarEvento}>
          <label>
            <span>Nome do Evento:</span>
            <p />
            <input
              value={evento.name}
              onChange={(evt) =>
                setEvento({ ...evento, name: evt.target.value })
              }
              name="NomeEvento"
              type="text"
            />
          </label>

          <label>
            <span>Local do Evento:</span>
            <p />
            <input
              value={evento.updateTimestamp.timezone}
              onChange={(evt) =>
                setEvento({
                  ...evento,
                  updateTimestamp: {
                    ...evento.updateTimestamp,
                    timezone: evt.target.value,
                  },
                })
              }
              name="localEvento"
              type="text"
            ></input>
          </label>

          <label>
            <span>Data do Evento:</span>
            <p />
            <input
              value={evento.updateTimestamp.date}
              onChange={(evt) =>
                setEvento({
                  ...evento,
                  updateTimestamp: {
                    ...evento.updateTimestamp,
                    date: evt.target.value,
                  },
                })
              }
              name="data"
              type="date"
            ></input>
          </label>

          <label>
            <span>Descrição do Evento:</span>
            <p />
            <textarea
              value={evento.shortDescription}
              onChange={(evt) =>
                setEvento({ ...evento, shortDescription: evt.target.value })
              }
              name="shortDescription"
              type="text"
            ></textarea>
          </label>

          <button type="submit"> Salvar Evento</button>
        </form>

        <button
          onClick={() => {
            navigate("/listaEventos");
          }}
        >
          Lista de eventos cadastrados
        </button>
      </div>
    </div>
  );
}
