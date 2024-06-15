import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselProps } from "../interfaces";

function CarouselComponent({ images }: carouselProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
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
        sliderClass=""
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
            }}
          >
            <img
              src={image}
              style={{
                maxHeight: 'block',
                height: '100%',
                borderRadius: 10,
                margin: 'auto',
                width: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
// function CarouselComponent({ images }: carouselProps) {
//   return (
//     <div
//       style={{
//         position: 'relative',
//         width: '100%'
//       }}
//     >
//       <Carousel
//         additionalTransfrom={0}
//         arrows={false}
//         autoPlay
//         autoPlaySpeed={4000}
//         centerMode={false}
//         className=""
//         containerClass="container-with-dots"
//         dotListClass=""
//         draggable
//         focusOnSelect={false}
//         infinite={false}
//         itemClass=""
//         keyBoardControl
//         minimumTouchDrag={80}
//         pauseOnHover
//         renderArrowsWhenDisabled={false}
//         renderButtonGroupOutside={false}
//         renderDotsOutside={true}
//         responsive={{
//           desktop: {
//             breakpoint: {
//               max: 3000,
//               min: 1024
//             },
//             items: 1,
//             partialVisibilityGutter: 40
//           },
//           mobile: {
//             breakpoint: {
//               max: 464,
//               min: 0
//             },
//             items: 1,
//             partialVisibilityGutter: 30
//           },
//           tablet: {
//             breakpoint: {
//               max: 1024,
//               min: 464
//             },
//             items: 1,
//             partialVisibilityGutter: 30
//           }
//         }}
//         rewind
//         rewindWithAnimation={true}
//         rtl={false}
//         shouldResetAutoplay
//         showDots={true}
//         sliderClass=""
//         slidesToSlide={1}
//         swipeable
//       >
//         {images.map((image, index) => (
//           <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <img
//               src={image}
//               style={{
//                 maxHeight: '100%',
//                 width: 'auto',
//                 borderRadius: 10,
//                 objectFit: 'contain'
//               }}
//             />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

export default CarouselComponent;
