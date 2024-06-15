import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselProps } from "../interfaces";

function CarouselComponent({ images }: carouselProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden', // Ensure no overflow is visible
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={4000}
        centerMode={false} // Ensure center mode is off
        className=""
        containerClass="carousel-container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass="carousel-slider"
        slidesToSlide={1}
        swipeable
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%', // Ensure the slide takes up the full width
            }}
          >
            <img
              src={image}
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                borderRadius: 10,
                objectFit: 'contain'
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
