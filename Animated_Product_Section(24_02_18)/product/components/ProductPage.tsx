"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {
  images: string[];
  name: string;
  desc: string;
  price: number;
};

const ProductPage = ({ images, name, desc, price }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [frontImageIndex, setFrontImageIndex] = useState(0);
  const [backImageIndex, setBackImageIndex] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleImageChange = () => {
    if (!images[backImageIndex]) {
      setIsSpinning(true);

      const timeout1 = setTimeout(() => {
        setFrontImageIndex(0);
        setBackImageIndex(1);
      }, 300);

      const timeout2 = setTimeout(() => {
        setIsSpinning(false);
      }, 700);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    } else {
      setIsFlipped(!isFlipped);
    }

    if (!isClicked) {
      setIsClicked(true);
    }
  };

  const handleBackChange = () => {
    if (backImageIndex === images.length - 1) {
      setFrontImageIndex(0);

      const timeout = setTimeout(() => {
        setBackImageIndex(1);
      }, 300);

      setIsFlipped(!isFlipped);

      return () => clearTimeout(timeout);
    } else {
      setFrontImageIndex(frontImageIndex + 2);
      setIsFlipped(!isFlipped);
      const timeout = setTimeout(() => {
        setBackImageIndex(backImageIndex + 2);
      }, 300);

      return () => clearTimeout(timeout);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 px-2 z-[20]">
      <div className="product-card">
        <div className={`card ${isFlipped || isSpinning ? "flipped" : ""}`}>
          <div className="card-face card-front flex flex-col gap-2 items-center">
            <Image
              src={images[frontImageIndex]}
              alt={name}
              width={500}
              height={500}
              onClick={handleImageChange}
              className="rounded-xl cursor-pointer w-[80vw] h-[80vw] md:w-[500px] md:h-[500px]"
            />
            {!isClicked && (
              <h1 className="text-gray-300 text-md animate-pulse">
                - Click to see more -
              </h1>
            )}
          </div>
          <div className="card-face card-back">
            <Image
              src={images[backImageIndex]}
              alt={name}
              width={500}
              height={500}
              onClick={handleBackChange}
              className="rounded-xl cursor-pointer w-[80vw] h-[80vw] md:w-[500px] md:h-[500px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 max-w-[90vw] md:max-w-[500px]">
        <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300">
          {name}
        </h1>
        <p className="text-gray-200 font-bold text-2xl mr-4">
          Price : {price}$
        </p>
        <p className="text-gray-300 text-lg md:text-[16px] lg:text-lg">
          {desc}
        </p>
        <button className="p-3 px-6 text-white text-lg bg-blue-500 button rounded-[20px]">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
