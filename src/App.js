import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Serives from "./pages/Services";
import NoPage from "./pages/NoPage";
import AboutUs from "./pages/AboutUs";

function App() {
    return (
        <>
            {/* <h1>App</h1> */}
                <Routes>
                        <Route index element={<Home />} />
                        <Route path="/services" element={<Serives />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="*" element={<NoPage />} />
                </Routes>
        </>
    );
}

export default App;
