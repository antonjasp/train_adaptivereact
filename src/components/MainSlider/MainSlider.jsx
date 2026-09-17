import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./MainSlider.module.css";
const images = [
  "images/imagesSlider/image1.jpg",
  "images/imagesSlider/image2.jpg",
  "images/imagesSlider/image3.jpg",
  "images/imagesSlider/image4.jpg",
  "images/imagesSlider/image5.jpg",
  "images/imagesSlider/image6.jpg",
  "images/imagesSlider/image7.jpg",
  "images/imagesSlider/image8.jpg",
];

export function MainSlider() {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1, // ⚡️ Тільки 1, щоб рухався поодинці без паузи на блоках
    arrows: true,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className={styles.titleSlider}>Наші об'єкти</h2>

      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                className={styles.swiperSlideImg}
                src={src}
                alt={`Фото ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
