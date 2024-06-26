import './App.css';
import Saudacao from './components/Saudacao';

function App() {
  let name = "Heitor"

  return (
    <header>
      <Saudacao
        name={name}
      />
    </header>
  );
}


export default App;