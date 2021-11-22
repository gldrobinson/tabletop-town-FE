import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import CategoryHome from "./components/category_home/CategoryHome";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoryHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
