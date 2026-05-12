import ColorHarmonizer from './components/ColorHarmonizer';
import ContrastChecker from './components/ContrastChecker';

function App() {
  return (
    <div className="App">
      <h1>Contraste de color</h1>
      <ColorHarmonizer />
      <hr />
      <ContrastChecker />
    </div>
  );
}

export default App;