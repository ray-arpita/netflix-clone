// import Navbar from './components/Navbar';
import './App.css';
import FirstDiv from './components/FirstDiv';
import Features from './components/Features';
// import MainPage from './components/MainPage';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import tvImage from './Images/tv.png'; 
import phone from './Images/phone2.jpeg';
import kidImg from "./Images/children.jpeg"



function App() {
  return (

    <div className="App" >
 <FirstDiv/>
 <Features 
 text="Enjoy on your TV " 
 text2="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
 Img = {tvImage}
 />
 <Features text="Create profiles for kids" text2="Send children on adventures with their favourite characters in a space made just for them—free with your membership."  Img = {kidImg} />
 <Features Img = {phone} text="Download your shows to watch offline" text2="Save your favourites easily and always have something to watch.

"  />
 <br/>
 {/* <MainPage/><br/> */}
 <FAQ/><br/>
 <Footer/>

    </div>
 
  );
}

export default App;
