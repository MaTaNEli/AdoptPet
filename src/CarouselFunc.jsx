import { useState } from "react";

const CarouselFunc = ({ images }) => {
  const [active, setActive] = useState(null);

  return (
    <div className="carousel">
      <img src={!active ? images[0] : images[active]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          //eslint-disable-next-line
          <img
            onClick={() => {
              setActive(+index);
            }}
            id={index}
            value={index}
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselFunc;
