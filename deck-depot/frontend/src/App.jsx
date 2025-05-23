import Header from './components/Header';
import Banner from './components/Banner';
import Productos from './pages/Productos';
import ContactoFlotante from './components/ContactoFlotante';
import BannerInformativo from './components/BannerInformativo';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
       <ContactoFlotante />
       <BannerInformativo />
      <Productos />
    </div>
  );
}

export default App;
