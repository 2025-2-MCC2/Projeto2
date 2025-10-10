import Sidebar from './components/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ padding: '20px' }}>
        <h2>👋 Seja bem vindo, Nome do Usuário!</h2>
      </main>
    </div>
  );
}

export default App;
