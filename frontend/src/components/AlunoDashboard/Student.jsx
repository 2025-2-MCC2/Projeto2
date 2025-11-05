import Sidebar from './SidebarAluno/SidebarAluno';
import Dashboard from './Dashboard/Dashboard';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import Ranking from './RankingAluno/RankingCard';
import GraficoArrecadacao from './GraficoArrecadacao/GraficoArrecadacao';
import Tarefas from './Tarefas/Tarefas';
import GraficoDonut from './GraficoDonut/GraficoDonut';
import './Student.css';

function Student() {
  return (
    <div className="Student-container">
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

            {/* Tarefas abaixo do gráfico */}
            <div className="tarefas-section">
              <Tarefas />
            </div>

          </div>

          {/* Ranking à direita */}
          <div className="side-column">
            <Ranking />
            <GraficoDonut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;