import React from 'react';
import { useMediaQuery } from 'react-responsive'

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Card from './components/Card/Card';
import { cardsConfig } from './configs/cardsConfig';
import Header from './components/Header/Header';

function App() {
  const isTabletOrDesctop = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <div className="App">
      <Header />

      <main>
        {isTabletOrDesctop && <Sidebar />}
        <section className="card-list">
          {
            cardsConfig.map((item, index) => {
              return <Card config={item} key={index} />
            })
          }
        </section>
      </main>
    </div>
  );
}

export default App;
