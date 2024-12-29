import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Offer from "../../components/Offer";
import ProductList from "../../components/ProductList";
import Progressor from "../../components/Progressor";
import Testnominal from "../../components/Testnominal";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black min-h-screen bg-gray-700">
      <Navbar />
      <Carousel />
      <Progressor />
      <ProductList />
      <Banner />
      <Offer />
      <Card />
      <Testnominal />
      <Footer />
    </div>
  );
}
