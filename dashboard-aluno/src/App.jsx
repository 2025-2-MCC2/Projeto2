import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
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
        <div className="dashboard-header">
          <h2>Bem-vindo(a), Katiê! 😉</h2>
          <Dashboard />
        </div>

        {/* Cards principais */}
        <div className="dashboard-cards">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>

        {/* Parte inferior - Gráfico (espaço reservado) + Ranking */}
        <div className="bottom-section">
          <div className="grafico-placeholder">
            {/* Aqui futuramente entrará o gráfico do Recharts */}
            <p>📊 Espaço reservado para o gráfico</p>
          </div>
          <Ranking />
        </div>
      </div>
    </div>
  );
}

export default App;
