import { useEffect, useState } from "react";
import "./App.css";
import { BackgroundGradientAnimation } from "./components/background-gradient-animation";
import { BentoCard, BentoGrid } from "./components/magicui/bento-grid";
import { messages } from "./assets/messages";


function App() {
    // const [cards, setCards] = useState<typeof features>([]);
    const [columns, setColumns] = useState(3);
    // useEffect(() => {
    //     const containerHeight = window.innerHeight;
    //     let currentColumnHeight = 0;
    //     let colCount = 1;
    //     features.forEach(card => {
    //         if (currentColumnHeight + card.height > containerHeight) {
    //             colCount++;
    //             currentColumnHeight = card.height;
    //         } else {
    //             currentColumnHeight += card.height;
    //         }
    //     });
    //     console.log('colCount:', colCount); //TESTING
    //     setCards(features);
    //     setColumns(colCount);
    // }, [cards]);

    // const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    //     const container = event.currentTarget;
    //     const scrollAmount = event.deltaY;
    //     container.scrollTo({
    //         top: 0,
    //         left: container.scrollLeft + scrollAmount,
    //         behavior: "smooth",
    //     });
    // };

    // useEffect(() => {
    //     if (typeof window === "undefined") return;
    //     // Disable automatic scroll restoration
    //     if (history && "scrollRestoration" in history) {
    //         history.scrollRestoration = "manual";
    //     }

    //     const scrollPosition =
    //         (document.body.scrollWidth - window.innerWidth) / 2;
    //     window.scrollTo(scrollPosition, 0);
    // }, []);

    // useEffect(() => {
    //     // Function to sort items by height, then by width
    //     const sortedItems = [...features].sort((a, b) => {
    //         return b.height - a.height || b.width - a.width;
    //     });
    //     setCards(sortedItems);
    // }, []);

    // const divRef = useRef(null);
    // useEffect(() => {
    //   if (divRef.current) {
    //     const container = divRef.current;
    //     console.log('width:', container.offsetWidth);
    //     console.log('height:', container.offsetHeight);
    //   }
    // }, [divRef]);

    useEffect(() => {
      const handleResize = () => {
        const maxRows = window.innerHeight > 1200 ? 2 : 1; 
        // const itemsPerColumn = Math.ceil(messages.length / maxRows);
        // setColumns(itemsPerColumn);
        const maxColumns = window.innerWidth > 900 ? Math.ceil(messages.length / maxRows) : 1; 
        setColumns(maxColumns);
      };
  
      handleResize(); // Set initial columns
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize); 
      };
    }, []);

    return (
        <div>
            <BackgroundGradientAnimation>
                    {/* <BentoGrid className="lg:grid-rows-5"> */}
                    {/* <BentoGrid 
                        className={`grid gap-2 auto-rows-auto place-items-center overflow-x-auto overflow-y-hidden my-auto debug`}
                        style={{gridTemplateColumns: `repeat(${columns + 1}, auto)`}}
                    > */}
                      <BentoGrid 
                          className={`${columns <= 3 && `mx-auto`} grid gap-5 grid-flow-row-dense overflow-x-auto place-items-center overflow-y-hidden my-auto p-5 scroll-container`}
                          style={{
                            gridTemplateColumns: `repeat(${columns}, auto)`,
                          }}

                      >
                          {messages && messages.map((m, i) => (
                              <BentoCard
                                  key={m.name + i}
                                  name={m.name}
                                  description={m.description}
                                  image={m.image}
                                  // href={m.href}
                                  // cta={m.cta}
                                  // background={m.background}
                                  // className={i % 3 === 0|| i % 6 === 0 ? "md:col-span-2 debug" : "debug"}
                                  // className={cn("[&>p:text-lg]", '')}
                                  className="border flex items-center justify-center w-[20rem] sm:w-[25rem]"
                                  // style={{ width: `${m.width}px`, height: `${m.height}px` }}
                              />
                          ))}

                      </BentoGrid>

            </BackgroundGradientAnimation>
        </div>

    );
}

export default App;



                {/* </div> */}
                {/* <div className='m-5 flex-grow  scroll-item'>
  return (
      <BackgroundGradientAnimation>
        <div className='flex flex-col'>
          <div className='m-5 mt-10 flex-grow'>
            <BentoGrid className="lg:grid-rows-3">
              {messages.map((message) => (
                <BentoCard key={message.name} {...message} />
              ))}
            </BentoGrid>
          </div>
          <div className='m-5 flex-grow'>
            <BentoGrid className="lg:grid-rows-3">
              {messages.map((message) => (
                <BentoCard key={message.name} {...message} />
              ))}
            </BentoGrid>
          </div>
          <div className='m-5 flex-grow  scroll-item'>
            <BentoGrid className="lg:grid-rows-3">
              {messages.map((message) => (
                <BentoCard key={message.name} {...message} />
              ))}
            </BentoGrid>
          </div> */}
                {/* </div> */}
