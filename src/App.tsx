import './style/GlobalStyle.css'
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
