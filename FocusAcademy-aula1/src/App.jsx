import BoasVinda from "./Components/BoasVindas";
import Botao from "./Components/Botao";

function App() {
  return (
    <div>
      <h1>Página de Inscrição</h1>
      <BoasVinda />
      <Botao className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
    </div>
  );
}

export default App;