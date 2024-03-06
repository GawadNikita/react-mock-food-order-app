import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './common/Header/Header';
import Meals from './assets/pages/Meals';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Meals />
    </>
  );
}

export default App;
