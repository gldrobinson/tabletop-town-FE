import "./styling/App.css";
import "./styling/review_home.css";
import "./styling/category_home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import CategoryHome from "./components/category_home/CategoryHome";
import { useState } from "react";
import ReviewHome from "./components/review_home/ReviewHome";

function App() {
  const [user, setUser] = useState({ username: "jessjelly" });
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<CategoryHome />} />
            <Route path="/reviews" element={<CategoryHome />} />
            <Route
              path="/reviews/category/:category"
              element={<CategoryHome />}
            />
            <Route path="/reviews/:review_id" element={<ReviewHome />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
