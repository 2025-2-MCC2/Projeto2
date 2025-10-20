import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Card1 from './components/Cards/Card1';
import Card2 from './components/Cards/Card2';
import Card3 from './components/Cards/Card3';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Sidebar lateral */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="main-content">
        {/* Header (título + canto direito) */}
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
      </div>
    </div>
  );
}

export default App;
