import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReviewContext } from "./contexts/ReviewContext";
import Header from "./components/Header.js";
import CategoryHome from "./components/category_home/CategoryHome";
import { useState } from "react";
import ReviewHome from "./components/review_home/ReviewHome";

function App() {
  const [review, setReview] = useState({});
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <ReviewContext.Provider value={{ review, setReview }}>
          <Routes>
            <Route path="/" element={<CategoryHome />} />
            <Route path="/reviews" element={<CategoryHome />} />
            <Route
              path="/reviews/category/:category"
              element={<CategoryHome />}
            />
            <Route path="/reviews/:review_id" element={<ReviewHome />} />
          </Routes>
        </ReviewContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
