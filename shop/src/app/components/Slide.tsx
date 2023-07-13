"use client"
import styled from "styled-components";
import Image from 'next/image'
import { useState, useRef, useEffect } from "react";

interface SlideProps {
  height: number;
  data?: {
    id: number;
    src?: string;
    text?: string;
    alt?: string;
  }[];
  ctrlBtn:number;
}

const Slide = (props: SlideProps) => {
  const { data } = props;
  const slideRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [currSlide, setCurrSlide] = useState(1);
  const startPointRef = useRef(0);
  const endPointRef = useRef(0);

  useEffect(() => {
    const slideElement = slideRef.current;
    if (slideElement) {
      setSlideWidth(slideElement.clientWidth);
    }
  }, []);

  const prevMove = () => {
    setCurrSlide((prevSlide) => {
      if (prevSlide > 1) {
        return prevSlide - 1;
      }
      return prevSlide;
    });
  };

  const nextMove = () => {
    setCurrSlide((prevSlide) => {
      if (prevSlide < data.length) {
        return prevSlide + 1;
      }
      // 슬라이드가 마지막에 도달하면 첫번째로 리셋
      return 1;
    });
  };
  

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("mousedown", e.pageX);
    startPointRef.current = e.pageX;
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("mouseup", e.pageX);
    endPointRef.current = e.pageX;
    if (startPointRef.current < endPointRef.current) {
      console.log("prev move");
      prevMove();
    } else if (startPointRef.current > endPointRef.current) {
      console.log("next move");
      nextMove();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log("touchstart", e.touches[0].pageX);
    startPointRef.current = e.touches[0].pageX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log("touchend", e.changedTouches[0].pageX);
    endPointRef.current = e.changedTouches[0].pageX;
    if (startPointRef.current < endPointRef.current) {
      console.log("prev move");
      prevMove();
    } else if (startPointRef.current > endPointRef.current) {
      console.log("next move");
      nextMove();
    }
  };

  useEffect(() => {
    const slideItems = slideRef.current?.querySelectorAll(".slide_item");
    if (slideItems) {
      slideItems.forEach((item, index) => {
        (item as HTMLElement).style.left = `${slideWidth * (index - currSlide + 1)}px`;
      });
    }
  }, [slideWidth, currSlide]);
  

  return (
    <StyledSlide style={{ height: props.height }}
      ref={slideRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ul className="slides">
        {data &&
          data.map((item) => (
            <li key={item.id} className="slide_item">
              {item.src && <Image src={item.src} alt={item.alt} width={1920} height={480} />}
              {item.text && <p>{item.text}</p>}
            </li>
          ))}
      </ul>
      <div className="controller">
        <span className="prev" style={{ fontSize: props.ctrlBtn }} onClick={prevMove}>&lang;</span>
        <span className="next" style={{ fontSize: props.ctrlBtn }} onClick={nextMove}>&rang;</span>
      </div>
    </StyledSlide>
  );
};

const StyledSlide = styled.div`
  width: 100%;
  max-width: 1024px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  .slides {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
    transition: left 0.5s ease-out;
  }
  .slides li {
    width: 100%;
    flex-shrink: 0;
    position: absolute;
  }
  .slides li p {
    text-align: center;
    line-height: 54px; /*글씨 정렬*/
  }

  .controller span {
    display: block;
    position: absolute;
    top: 50%;
    transform: translate(0, -40%);
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
  .controller .prev {
    left: 10px;
  }
  .controller .next {
    right: 10px;
  }

  @media only screen and (max-width: 833px) {
    .slides li p {font-size:14px;}
  }
`;

export default Slide;
