import { DataProvider } from "./context/DataContext/DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:userId" element={<PostPage />} />
          <Route path="/post/:postId/details" element={<PostDetails />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
