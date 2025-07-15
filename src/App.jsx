import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import  Projects  from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
