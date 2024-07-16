import React, { useEffect, useRef } from "react";
import styles from "../style";

const InfiniteMovingCards = ({ items, direction = "right", speed = "slow" }) => {
  const containerRef = useRef(null);
  const scrollSpeed = speed === "slow" ? 1 : speed === "medium" ? 2 : 3;

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId;
    
    const scroll = () => {
      if (direction === "right") {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      } else {
        container.scrollLeft -= scrollSpeed;
        if (container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, scrollSpeed]);

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-hidden whitespace-nowrap"
      style={{ whiteSpace: "nowrap" }}
    >
      {items.concat(items).map((item, index) => (
        <div key={index} className="flex items-center justify-start m-3">
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {item.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfiniteMovingCards;
