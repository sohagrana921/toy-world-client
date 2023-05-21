import { Carousel } from "flowbite-react";
import useTitle from "../../hooks/useTitle";

const Banner = () => {
  useTitle("Home");
  return (
    <div className="h-64 sm:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] my-container">
      <Carousel>
        <img
          className="rounded-xl"
          src="https://i.ibb.co/mvWzyyv/TW-Best-Toys-Web-Banner-2583x1000-0223-FA-01-1240x.webp"
          alt="..."
        />
        <img
          className="rounded-xl"
          src="https://i.ibb.co/wwN2qrL/SF-Website-Banner-Desktop-1240x.webp"
          alt="..."
        />

        <img
          className="rounded-xl"
          src="https://i.ibb.co/qk9hP3j/2023-LEGO-City-Masters-Homepage-Banner-Desktop-1240x.webp"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Banner;
