import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MainStyles.css";
import holder from "./RootImages/Thumbnail.jpg"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 7
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 7
  }
};

const ShopSlide = () => {
  return ( 
    <Carousel responsive={responsive} infinite="true" className="carousel">
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    <img src={holder} alt="Place Holder" className="carouselImage noSelect"/>
    </Carousel>
  );
}

export default ShopSlide;