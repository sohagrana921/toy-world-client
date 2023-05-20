import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import Rating from "react-rating";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
const SubCategoryCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { photoUrl, toyName, rating, quantity, price, _id } = toy;
  const handleNotify = () => {
    if (user) {
      navigate(`/toyDetails/${_id}`);
    }
    toast.error("You have to login first to view details");
    navigate("/login");
  };
  console.log(user);
  return (
    <div className="card border-2">
      <figure>
        <img src={photoUrl} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>Price : {"$" + price}</p>
        <p>
          <span>Rating : </span>
          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span> {rating}</span>
        </p>
        <p>Available Quantity : {quantity}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleNotify}
            className="btn bg-orange-500 btn-md my-2"
          >
            <span className="mr-2">See Details</span>
            <FaArrowRight></FaArrowRight>
          </button>
          <Toaster position="top-center" reverseOrder={true} />
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
