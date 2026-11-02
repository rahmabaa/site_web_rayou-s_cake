import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CakeGallery from "./components/CakeGallery";
import PriceMenu from "./components/PriceMenu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
       <CakeGallery />
       <PriceMenu />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;