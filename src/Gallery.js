import './MainStyles.css';
import './Gallery.css';
import ImageGallery from "react-image-gallery";

const images = [
    {
      original: "./Images/Gallery/IMG_1886.JPG",
      thumbnail: "./Images/Gallery/IMG_1886.JPG",
      originalHeight: "600"
    },
    {
      original: "./Images/Gallery/IMG_1887.JPG",
      thumbnail: "./Images/Gallery/IMG_1887.JPG",
      originalHeight: "600"
    },
    {
      original: "./Images/Gallery/IMG_1888.JPG",
      thumbnail: "./Images/Gallery/IMG_1888.JPG",
      originalHeight: "600"
    },
    {
      original: "./Images/Gallery/IMG_1889.JPG",
      thumbnail: "./Images/Gallery/IMG_1889.JPG",
      originalHeight: "600"
    },
    {
      original: "./Images/Gallery/IMG_1890.JPG",
      thumbnail: "./Images/Gallery/IMG_1890.JPG",
      originalHeight: "600"
    },
    {
      original: "./Images/Gallery/IMG_1891.JPG",
      thumbnail: "./Images/Gallery/IMG_1891.JPG",
      originalHeight: "600"
    },
    {
      original: "./Images/Gallery/IMG_1892.JPG",
      thumbnail: "./Images/Gallery/IMG_1892.JPG",
      originalHeight: "600"
    },
    {
      original: "./Images/Gallery/IMG_1893.JPG",
      thumbnail: "./Images/Gallery/IMG_1893.JPG",
      originalHeight: "600"
    },
    {
      original: "./Images/Gallery/IMG_1894.JPG",
      thumbnail: "./Images/Gallery/IMG_1894.JPG",
      originalHeight: "600"
    },
    {
      original: "./Images/Gallery/IMG_1895.JPG",
      thumbnail: "./Images/Gallery/IMG_1895.JPG",
      originalHeight: "600"
    },
    {
      original: "./Images/Gallery/IMG_1896.JPG",
      thumbnail: "./Images/Gallery/IMG_1896.JPG",
      originalHeight: "600"
    },
  ];

const Gallery = () => {
    return ( 
        <div className="galleryMain mainDiv">
            <div className='galleryImages'>
                <ImageGallery items={images} infinite='false'/>
            </div>
        </div>
    );
}

export default Gallery;