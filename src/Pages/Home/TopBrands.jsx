import Marquee from "react-fast-marquee";
const TopBrands = () => {
  return (
    <div className=" my-container flex items-center bg-slate-100">
      <div className="w-1/5">
        <h1 className="text-4xl px-4 font-bold text-orange-500 text-center">
          TOP BRANDS
        </h1>
      </div>
      <div>
        <Marquee speed={150} autoFill={true}>
          <div className="car">
            <img
              className="h-20 mr-8 rounded-lg"
              src="https://cdn.shopify.com/s/files/1/0349/4379/5332/files/PAW-Logo.jpg?v=1617180127"
              alt=""
            />
          </div>
          <div className="card">
            <img
              className="h-20 mr-8 rounded-lg"
              src="https://cdn.shopify.com/s/files/1/0349/4379/5332/files/logo_Monster_jam.jpg?v=1617180144"
              alt=""
            />
          </div>

          <div className="card">
            <img
              className="h-20 mr-8 rounded-lg"
              src="https://cdn.shopify.com/s/files/1/0349/4379/5332/files/frozen_png.jpg?v=1617180180"
              alt=""
            />
          </div>
          <div className="car">
            <img
              className="h-20 mr-8 rounded-lg"
              src="https://cdn.shopify.com/s/files/1/0349/4379/5332/files/LOL_SURPRISE_LOGO_PNG.png?v=1613616477"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
