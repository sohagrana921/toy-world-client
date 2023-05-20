import { Link } from "react-router-dom";
const ChooseOne = () => {
  return (
    <div className="flex my-container items-center my-8">
      <div className="w-1/2 px-4">
        <h2 className="text-5xl font-extrabold text-orange-500 ">
          Choose How You Want! <br />
          <span>For Buy The Best Toy</span>
        </h2>
        <p className="font-semibold my-4">
          Choose toys that can be used in a variety of ways. · Look for toys
          that will grow with your child. · Select toys that encourage
          exploration and problem-solving. 6 topics include: Choose toys that
          can be used in a variety of ways ⋅
        </p>
        <p>
          <Link to="/allToys" className="btn bg-orange-500">
            Sell All Toys
          </Link>
        </p>
      </div>
      <div>
        <img
          className="rounded-lg"
          src="https://i.ibb.co/BtMWCPb/istockphoto-176794190-612x612.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ChooseOne;
