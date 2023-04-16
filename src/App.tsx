import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./assets/css/reset.css"
import Landing from './pages/landing/Landing';
import Header from './header/Header';
import Other from './pages/others/Other';
function App() {
  return (
    <div className='app'>
      <Header />
      <Routes >
        <Route path="/" element={<Landing />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </div>
  );
}

export default App;
