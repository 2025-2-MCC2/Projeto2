import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Card1 from './components/Cards/Card1';
import Card2 from './components/Cards/Card2';
import Card3 from './components/Cards/Card3';
import Ranking from './components/Ranking';
import GraficoArrecadacao from './components/GraficoArrecadacao';
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

        {/* container card e ranking*/}
        <div className="cards-wrapper">
          <div className="cards-container">

            {/* Cards em linha */}
            <div className="cards-row">
              <Card1 />
              <Card2 />
              <Card3 />
            </div>

            {/* Gráfico abaixo dos cards */}
            <div className="grafico-section">
              <GraficoArrecadacao />
            </div>
          </div>

          {/* Ranking à direita */}
          <Ranking />
        </div>
      </div>
    </div>
  );
}

export default App;