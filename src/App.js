import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MyCarousel from './components/MyCarousel';
import MapAndText from './components/MapAndText';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <MyCarousel />
      <MapAndText />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
