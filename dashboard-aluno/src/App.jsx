import Sidebar from './components/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ padding: '20px' }}>
        <h1>Conteúdo do Dashboard</h1>
      </main>
    </div>
  );
}

export default App;
