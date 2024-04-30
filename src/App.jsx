import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/blog/:id" Component={Blog}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/about" Component={About}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
