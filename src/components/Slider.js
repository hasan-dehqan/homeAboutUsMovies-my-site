import React, { Component } from "react";
import img_1 from "../imgSlider/1_img.jpg";
import img_2 from "../imgSlider/2_img.jpg";
import img_3 from "../imgSlider/3_img.jpg";
import img_4 from "../imgSlider/4_img.jpg";
import img_5 from "../imgSlider/5_img.jpg";
import img_6 from "../imgSlider/6_img.jpg";
import img_7 from "../imgSlider/7_img.jpg";
import img_8 from "../imgSlider/8_img.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import style from "../styles/style.module.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  nextBtnHandler = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.sliderImages.length,
    }));
  };
  
  prevBtnHandler = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + this.sliderImages.length) % this.sliderImages.length,
    }));
  };
  
  sliderImages = [
    { id: 1, src: img_1, alt: "img_1" },
    { id: 2, src: img_2, alt: "img_2" },
    { id: 3, src: img_3, alt: "img_3" },
    { id: 4, src: img_4, alt: "img_4" },
    { id: 5, src: img_5, alt: "img_5" },
    { id: 6, src: img_6, alt: "img_6" },
    { id: 7, src: img_7, alt: "Img_7" },
    { id: 8, src: img_8, alt: "img_9" },
  ];

  render() {
    return (
      <div>
        <div className={style["section"]}>
          <div className={style["slider"]}>
            {this.sliderImages.map((slider) => (
              <img
                key={slider.id}
                src={slider.src}
                alt={slider.alt}
                className={
                  this.state.currentIndex + 1 === slider.id
                    ? style["active"]
                    : style["dective"]
                }
              />
            ))}
          </div>
          <button className={style["prev"]} onClick={this.prevBtnHandler}>
            <FiChevronLeft />
          </button>
          <button className={style["next"]} onClick={this.nextBtnHandler}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
