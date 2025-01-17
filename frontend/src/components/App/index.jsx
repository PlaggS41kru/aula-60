import Header from "../Header";
import NowPlaying from "../NowPlaying";

export default function App() {
  const [mostrarBarraProgresso, setMostrarBarraProgresso] = useState(true);

  function manipuladorMostrarMusicas() {
    setMostrarBarraProgresso(!mostrarBarraProgresso);

    alert(mostrarBarraProgresso)
  }
  return (
    <>
      <Header 
      title="Tocando Agora"
      manipuladorMostrarMusicas={manipuladorMostrarMusicas}
      />
      <NowPlaying mostrarBarraProgresso={mostrarBarraProgresso} 
      />
    </>
  );
}
