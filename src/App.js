import './App.css';
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
        <Route path="/" element={<ProductsPage />} exact />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/new-meetup" element={<NewProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
