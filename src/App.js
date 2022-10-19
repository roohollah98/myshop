import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Products from "./components/products";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Basket from "./components/basket";
import DetailsPage from "./components/detailsPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/products" element={<LandingPage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
