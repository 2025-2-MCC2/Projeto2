import React from 'react';
import Header from './components/Header';
import DonationHistory from './components/DonationHistory';
import InfoCards from './components/InfoCards';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Olá, Nome do doador!</h1>
        <DonationHistory />
        <InfoCards />
      </main>
    </div>
  );
}

export default App;