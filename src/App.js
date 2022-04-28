import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="header"></header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
