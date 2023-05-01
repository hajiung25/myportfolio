import './style/GlobalStyle.css'
import './style/variables.css';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import Header from './component/Header';
import { useEffect, useState } from 'react';
import Loading from './page/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 6000)
  }, [])
  return (
    <>
    {/* {
      isLoading ? <Loading></Loading> : null
    } */}
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
