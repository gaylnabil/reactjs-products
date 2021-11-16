import './App.css';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import FavoritesPage from './pages/Favorites';
import ProductsPage from './pages/Products';
import NewProductPage from "./pages/NewProduct";
import MainNavigation from './components/layout/navigation';


function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route exact path="/favorites" element={<FavoritesPage />}  />
        <Route exact path="/" element={<ProductsPage />}  />
        <Route exact path="/new-product" element={<NewProductPage />}   />
      </Routes>
    </div>
  );
}

export default App;
