import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Content from "./Pages/Content";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Content/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
