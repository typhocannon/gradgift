import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselProps } from "../interfaces";
// import { useEffect, useState } from "react";

const responsive = {
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
};

function CarouselComponent({ images }: carouselProps) {
  // const [dimensionClass, setDimensionClass] = useState<string[]>([]);
  // const [maxWidth, setMaxWidth] = useState<string>('');
  // const [maxHeight, setMaxHeight] = useState<string>('');
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchDimensionClass = async () => {
  //     const dimensions = await Promise.all(
  //       images.map(
  //         (src) =>
  //           new Promise<{ width: number; height: number }>((resolve) => {
  //             const img = new Image();
  //             img.onload = () => resolve({ width: img.width, height: img.height });
  //             img.src = src;
  //           })
  //       )
  //     );
  //     let maxW = 0;
  //     let maxH = 0;
  //     const newDimensionClass: string[] = [];

  //     for (let i = 0; i < dimensions.length; i++) {
  //       maxW = Math.max(maxW, dimensions[i].width);
  //       maxH = Math.max(maxH, dimensions[i].height);
  //       if (dimensions[i].width > dimensions[i].height) {
  //         newDimensionClass.push(`w-[${dimensions[i].width / 2}px]`);
  //         console.log(`w-[${dimensions[i].width / 2}px]`); // TESTING
  //       } else {
  //         newDimensionClass.push(`h-[${dimensions[i].height / 2}px]`);
  //         console.log(`h-[${dimensions[i].height / 2}px]`); // TESTING
  //       }
  //     }
  //     setMaxWidth(`max-w-[${maxW / 2}px]`);
  //     setMaxHeight(`max-h-[${maxH / 2}px]`);
  //     setDimensionClass(newDimensionClass);
  //     setIsLoading(false);
  //   };
  //   fetchDimensionClass();
  // }, [images]);



  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchDimensionClass = async () => {
  //     Promise.all(
  //       images.map((src) =>
  //         new Promise<{width: number, height: number}>((resolve) => {
  //           const img = new Image();
  //           img.onload = () => resolve({width: img.width, height: img.height});
  //           img.src = src;
  //         })
  //       )
  //     ).then((dimensions) => {
  //       // setDimensions(dimensions);
  //       const newDimensionClass: string[] = [];
  //       const newMaxWidths: string[] = [];
  //       const newMaxHeights: string[] = [];
  //       for(let i = 0; i < dimensions.length; i++) {
  //         newMaxWidths.push(`${dimensions[i].width}px`);
  //         newMaxHeights.push(`${dimensions[i].height}px`);
  //         if(dimensions[i].width > dimensions[i].height) {
  //           setDimensionClass([...dimensionClass, `w-[${dimensions[i].width / 2}px]`]);
  //           console.log(`w-[${dimensions[i].width / 2}px]`);//TESTING
  //         }else{
  //           setDimensionClass([...dimensionClass, `h-[${dimensions[i].height / 2}px]`]);
  //           console.log(`h-[${dimensions[i].height / 2}px]`);//TESTING
  //         }
  //       }
  //       setIsLoading(false);
  //     });
  //   };
  //   fetchDimensionClass();
  // }, [images]);

  // if(isLoading) return <div>Loading...</div>;

  return (
    <div
    className="debug mx-auto"
      style={{
        position: 'relative',
        // width: '100%',
        // height: '100%',
        maxWidth:'300px',
        // maxHeight: '600px',
        overflow: 'hidden', // Ensure no overflow is visible
        
        maxHeight: "100%",
        width: "auto",
        borderRadius: 10,
        objectFit: "contain",
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        ssr={false}
        autoPlaySpeed={4000}
        centerMode={false} // Ensure center mode is off
        className=""
        containerClass="carousel-container "
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
        responsive={responsive}
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


      //   slidesToSlide={1}
      //   swipeable
      // >
      //   {images.map((img, i) => (
      //     <div key={i}><img src={img}/></div>
      //   ))}