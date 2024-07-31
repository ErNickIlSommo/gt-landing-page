// Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Confirm from "./pages/Confirm"
import NotFound from "./pages/NotFound";

// Components
import SiteNavBar from "./components/SiteNavbar"
import SiteFooter from "./components/SiteFooter";


function App() {

  return (
    <>
      <BrowserRouter>
        <SiteNavBar />
        <div className="min-h-screen flex flex-col justify-between">
          <div className="mt-36 md:mt-24 px-3 md:px-10">
            <Routes>
              <Route index element={<Home />}/>
              <Route path="/confirm" element={<Confirm/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <SiteFooter />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
