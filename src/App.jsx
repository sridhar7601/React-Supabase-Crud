import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 >Suppa Smothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
