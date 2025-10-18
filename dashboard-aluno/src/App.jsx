import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div className='Título-Dash'>
            <h2>Bem vindo(a), Katiê!</h2>
            </div>
            <Dashboard />
        </div>
    );
}

export default App;