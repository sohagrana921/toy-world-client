import Marquee from "react-fast-marquee";

const PhotoGallery = () => {
  return (
    <div className="my-container">
      <h3 className="text-3xl text-center font-bold bg-orange-500 text-white rounded-full py-3 md:w-1/5 mx-auto my-8">
        Cars Gallery
      </h3>
      <Marquee speed={150} autoFill={true}>
        <div className="card border  w-96 ">
          <img
            className="h-[200px] w-[400px]"
            src="https://i.ibb.co/3mQFRNZ/istockphoto-493243963-170667a.jpg"
            alt=""
          />
        </div>
        <div className="card w-96 border ">
          <img
            className="h-[200px] w-[400px]"
            src="https://i.ibb.co/SBCmPtf/istockphoto-494709043-612x612.jpg"
            alt=""
          />
        </div>
        <div className="card w-96 border ">
          <img
            className="h-[200px] w-[400px]"
            src="https://i.ibb.co/jR7bFs1/istockphoto-135326809-612x612.jpg"
            alt=""
          />
        </div>
        <div className="card w-96 border ">
          <img
            className="h-[200px] w-[400px]"
            src="https://i.ibb.co/ftcRzCB/istockphoto-1429710928-170667a.jpg"
            alt=""
          />
        </div>
        <div className="card border w-96 ">
          <img
            className="h-[200px] w-[400px]"
            src="https://i.ibb.co/kSCvH3G/istockphoto-155017668-170667a.jpg"
            alt=""
          />
        </div>
        <div className="card border w-96 ">
          <img
            className="h-[200px] w-[400px]"
            src="https://i.ibb.co/L55wX2X/istockphoto-1144881202-612x612.jpg"
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default PhotoGallery;
