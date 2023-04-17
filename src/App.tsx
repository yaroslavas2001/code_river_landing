import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./assets/css/reset.css"
import Landing from './pages/landing/Landing';
import Header from './header/Header';
import Other from './pages/others/Other';
import lineImage from "./assets/image/background_line.svg"
import Animation from './components/animaton/Animation';
import AnimationLine from './components/animaton/AnimationLine';
function App() {
  return (
    <div className='app'>
      {/* <Animation></Animation> */}
      {/* <AnimationLine/> */}
      <Header />
      {/* <img src={lineImage} className='background_line' alt="" /> */}
      <Routes >
        <Route path="/" element={<Landing />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </div>
  );
}

export default App;
