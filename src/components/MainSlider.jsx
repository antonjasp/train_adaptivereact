import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    infinite: true,
    speed: 500,
    slidesToShow: 3, // ← дефолт для великих екранів
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1242, // при ширині <= 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 840, // при ширині <= 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="titleSlider">Наші об'єкти</h2>

      <div className="slider-container">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                className="swiper-slide-img"
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
