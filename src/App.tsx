import React from 'react';
import { MyRoutes } from './routes/MyRoutes';
import './App.css';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Render the header component */}
      <Header />

      {/* Main header section */}
      <header className="App-header">
        {/* Main content */}
        <main>
          <MyRoutes />
        </main>
      </header>
      <Footer />
    </div>
  );
}

export default App;
