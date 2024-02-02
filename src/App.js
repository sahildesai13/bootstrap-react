import './App.css';
import Slider1 from './component/Slider1/Slider1';
import Slider2 from './component/Slider2/Slider2';
import TopNav from './component/TopNav/TopNav';
import AboutUs from './component/aboutUs/AboutUs';
import Article from './component/article/Article';
import Footer from './component/footer/Footer';
import OurClients from './component/ourClients/OurClients';
import Portfolio from './component/portfolio/Portfolio';
import Services from './component/services/Services';
import Team from './component/team/Team';

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Slider1></Slider1>
      <Services></Services>
     <AboutUs></AboutUs>
     <Portfolio></Portfolio>
     <Slider2></Slider2>
     <OurClients></OurClients>
     <Team></Team>
     <Article></Article>
     <Footer></Footer>
    </div>
  );
}

export default App;
