import React, { useState } from "react";

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
