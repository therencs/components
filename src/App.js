
import './style/base.css';
import Header from "./components/Header.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import Gallery from "./components/Gallery.js";
import './'


function App() {
  const InfocardDetails = [{
    "image": "https://media.istockphoto.com/id/475263838/photo/many-mixed-breads-and-rolls-shot-from-above.jpg?s=612x612&w=0&k=20&c=pU1DEpAsdYPBU4_Qn-xCxf3N16PGhUyVRbQ3wkwWrG0=",
    "name": "Bakery",
    "desc": "Try our world class breads and pastries. Baked fresh daily."
    },
    {"image": "https://media.istockphoto.com/id/450969175/photo/butchers-counter.jpg?s=612x612&w=0&k=20&c=RQUmIzrloklMWjp9U8j7qUBGvPrEPGjXffXAdLFbMuU=",
    "name": "Meats",
    "desc": "Choose from a wide selection of meats and seafood."
    },
    {"image": "https://media.istockphoto.com/id/1408768033/photo/fruits-and-vegetables-on-shop-stand-in-supermarket-grocery-store.jpg?s=612x612&w=0&k=20&c=l2IZsXSWbw0MdIOSZcwnIFCJcoLnCokqHJWTTh5dm6w=",
      "name": "Produce",
      "desc": "Fruits and vegetables at an affordable price."
    },
    {"image": "https://media.istockphoto.com/id/1221887514/photo/smoked-meat-products-display-meats-cold-cuts-and-sausages-in-a-butchers-shop.jpg?s=612x612&w=0&k=20&c=b5OOjwLXGXwWAKl9aEjO5ug19pCEAbsqZ96QkzsrJB4=",
      "name": "Deli",
      "desc": "We always supply our finest cuts, feel free to pick up samples!"
    }]

  return (
    <div className="App">
      <Header/>

      <Banner // Buttons are included in the banner component
        title="Inspiring Newcomers Everywhere"
        subtitle="Helping Workers Hone Their Skills For Over"
        largetext="50 Years"
      />

      <Gallery content={InfocardDetails}/>
      <Footer/>
    </div>
  );
}

export default App;
