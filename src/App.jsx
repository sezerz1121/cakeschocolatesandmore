import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import Cakes from "./pages/Cakes.jsx";
import Desserts from "./pages/Desserts.jsx";
import VisitUs from "./pages/VisitUs.jsx";
import OurStory from "./pages/OurStory.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/visit-us" element={<VisitUs />} />
          <Route path="/our-story" element={<OurStory />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
