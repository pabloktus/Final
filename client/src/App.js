import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components/Detail/Detail";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
