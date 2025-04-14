import { Route, Routes, BrowserRouter } from "react-router-dom";
import About  from "./Components/About";
import Contact  from "./Components/Contact";
import  Home  from "./Pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
