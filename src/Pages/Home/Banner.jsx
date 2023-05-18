const Banner = () => {
  return (
    <div className="my-container">
      <div className="carousel w-full   ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/wwN2qrL/SF-Website-Banner-Desktop-1240x.webp"
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-xl">
            <a href="#slide4" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/qk9hP3j/2023-LEGO-City-Masters-Homepage-Banner-Desktop-1240x.webp"
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-xl ">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/mvWzyyv/TW-Best-Toys-Web-Banner-2583x1000-0223-FA-01-1240x.webp"
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-xl">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
