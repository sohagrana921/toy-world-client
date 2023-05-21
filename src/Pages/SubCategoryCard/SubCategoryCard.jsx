import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import Rating from "react-rating";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
const SubCategoryCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { photoUrl, toyName, rating, quantity, price, _id } = toy;
  const handleNotify = () => {
    if (!user) {
      return toast.error("You have to login first to view details");
    }
  };
  // console.log(_id);
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
          <Link
            onClick={handleNotify}
            to={`/toyDetails/${_id}`}
            className="btn bg-orange-500 btn-md my-2"
          >
            <span className="mr-2">See Details</span>
            <FaArrowRight></FaArrowRight>
          </Link>
          <Toaster position="top-center" reverseOrder={true} />
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
