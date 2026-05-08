import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Main from './components/Main';
import OverMij from './components/OverMij';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Main />} />
        <Route path="/over-mij" element={<OverMij />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App