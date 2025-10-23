import Sidebar from './components/Sidebar';
import Dashboard, { Grafico } from './components/Dashboard';
import Card1 from './components/Cards/Card1';
import Card2 from './components/Cards/Card2';
import Card3 from './components/Cards/Card3';
import Ranking from './components/Ranking';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        {/* Header */}
        <div className="dashboard-header">
          <h2>Bem-vindo(a), Katiê! 😉</h2>
          <Dashboard />
        </div>

        {/* ====== CONTAINER DOS CARDS + RANKING ====== */}
        <div className="cards-wrapper">
          <div className="cards-container">
            <Card1 />
            <Card2 />
            <Card3 />
          </div>

          {/* Ranking ao lado */}
          <Ranking />
        </div>

        {/* ====== GRÁFICO ABAIXO DOS CARDS ====== */}
        <div className="grafico-section">
          <div className="grafico-container">
            <Grafico />
          </div>
          {/* Espaço vazio do lado direito para manter o layout */}
      
        </div>
      </div>
    </div>
  );
}

export default App;