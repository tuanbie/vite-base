import React, { useState } from "react";
import "./style.css";
// Định nghĩa kiểu cho dữ liệu hình ảnh
interface ImageData {
  id: number;
  imgSrc: string;
}

// Định nghĩa kiểu cho props của Carousel
interface CarouselProps {
  images: ImageData[];
}

// Component Carousel để hiển thị các hình ảnh
const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container relative w-full overflow-hidden">
      <div
        className="carousel-slides flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="carousel-slide flex-shrink-0 w-full">
            <img src={image.imgSrc} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="carousel-button carousel-button-left absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="carousel-button carousel-button-right absolute right-0 top-1/2 transform -translate-y-1/2"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
