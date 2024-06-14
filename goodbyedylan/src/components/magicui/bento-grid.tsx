import { cn } from "../../lib/utils"
import { ReactNode } from "react";
import CarouselComponent from "../carousel";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  image,
  description,
}: {
  name: string;
  className: string;
  description: string;
  image: string[];
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div className="pointer-events-none flex flex-col m-3 mt-10 transition-all duration-300 group-hover:-translate-y-5">
      <div className="flex-grow">
        {image.length === 1 ? (
          <div className="image-container flex justify-center items-center">
            <img
              src={image[0]}
              alt={name}
              style={{
                maxHeight: '100%',
                width: 'auto',
                borderRadius: 10,
                objectFit: 'contain'
              }}
            />
          </div>
        ) : image.length > 1 ? (
          <div className="image-container">
            <CarouselComponent images={image} />
          </div>
        ) : null}
        <div className="text-container mt-5">
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            {name}
          </h3>
          <p className="max-w-lg text-neutral-400 m-4">{description}</p>
        </div>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
