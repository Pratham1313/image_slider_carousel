import React, { useState } from "react";
import img1 from "../src/img/car-1.jpg";
import img2 from "../src/img/car-2.jpg";
import img3 from "../src/img/car-3.jpg";
import img4 from "../src/img/car-4.jpg";
import img5 from "../src/img/car-5.jpg";
import "./slider.css";
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";

export function Slider() {
  const [current, setcurrent] = useState(0);
  let images = [img4, img2, img3, img5, img1];

  function go_left() {
    setcurrent((current) => {
      if (current === 0) {
        return images.length - 1;
      }
      return current - 1;
    });
    console.log(current);
  }
  function go_rigth() {
    setcurrent((current) => {
      if (current === images.length - 1) {
        return 0;
      }
      return current + 1;
    });
    console.log(current);
  }

  return (
    <>
      <div
        style={{
          width: "70%",
          height: "80%",
          position: "relative",
          margin: "auto",
          overflow: "hidden"
        }}
      >
        <div style={{ display: "flex" }}>
          {images.map((src) => {
            return (
              <img
                src={src}
                alt={images[current]}
                className="image-slider"
                style={{ translate: `${-100 * current}%` }}
              />
            );
          })}
        </div>

        <button
          className="slider_button"
          style={{ left: "0" }}
          onClick={go_left}
        >
          {" "}
          <ArrowBigLeft style={{ backgroundColor: "none" }} />{" "}
        </button>
        <button
          className="slider_button"
          style={{ right: "0" }}
          onClick={go_rigth}
        >
          <ArrowBigRight />
        </button>
        <div
          style={{
            position: "absolute",
            bottom: ".1rem",
            left: "50%",
            translate: "-50%",
            display: "flex",
            gap: ".5rem"
          }}
        >
          {images.map((_, index) => {
            return (
              <button onClick={() => setcurrent(index)} className="slider_but">
                {index === current ? <CircleDot /> : <Circle />}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
