import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App";
import CadastrarEvento from "./Eventos/CadastrarEvento";
import ListaEventos from "./Eventos/ListaEventos";
import axios from "axios";

export default function Routes() {
  const [evento, setEvento] = useState({
    id: "",
    name: "",
    shortDescription: "",
    updateTimestamp: {
      timezone: "",
      date: "",
    },
  });

  const [listaEventos, setListaEventos] = useState([]);

  async function getEventos() {
    try {
      const response = await axios.get(
        "https://mapacultural.secult.ce.gov.br/api/event/find?@select=id,name,shortDescription,updateTimestamp&@limit=100"
      );
      setListaEventos(response.data);
    } catch (e) {
      alert(`Erro: ${e}`);
    }
  }

  useEffect(() => {
    getEventos();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/cadastroEventos",
      element: (
        <CadastrarEvento
          setListaEventos={setListaEventos}
          listaEventos={listaEventos}
          evento={evento}
          setEvento={setEvento}
        />
      ),
    },
    {
      path: "/listaEventos",
      element: <ListaEventos listaEventos={listaEventos} />,
    },
  ]);

  return <RouterProvider router={router} />;
}
