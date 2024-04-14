import styled from "styled-components";
import { useState, useEffect } from "react";

const ImageContainer = styled.div`
  overflow: hidden;
  margin: auto;
`;

const ImageSlider = styled.div`
  display: flex;
  aspect-ratio: 1366/767;
  transition: transform 1s ease-in-out;
  transform: translateX(${(props) => props.$counter * -100}%);
  img {
    width: 100%;
  }
`;

export default function Carousel({ name, images }) {
  const [currCarouselIndex, setCurrCarouselIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currCarouselIndex === images.length - 1) {
      return setCurrCarouselIndex(0);
    } else {
      return setCurrCarouselIndex(currCarouselIndex + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      carouselInfiniteScroll();
    }, 3000);
  });

  return (
    <ImageContainer>
      <ImageSlider $counter={currCarouselIndex}>
        {images.map((image, idx) => (
          <img
            src={image}
            alt={`${name}_image_${idx}`}
            key={`${name}_image_slider_${idx}`}
          />
        ))}
      </ImageSlider>
    </ImageContainer>
  );
}
