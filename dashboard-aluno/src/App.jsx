import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css'; // (vamos colocar o CSS aqui embaixo)
 
function App() {
    return (
        <div className="app-container">
            <Sidebar />

            <div className="main-content">
                <div className="titulo-dash">
                    <h2>Bem-vindo(a), Katiê! 😉</h2>
                </div>

                <Dashboard />
            </div>
        </div>
    );
}

export default App;