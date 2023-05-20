import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const SubCategoryCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    sellerName,
    sellerEmail,
    photoUrl,
    toyName,
    rating,
    quantity,
    price,
    details,
  } = toy;
  const handleNotify = () => {
    if (!user) {
      toast.error("You have to log in first to view details");
      navigate(`/login`);
    }
  };
  return (
    <div className="card border-2">
      <figure>
        <img src={photoUrl} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>Price : {"$" + price}</p>
        <p>Rating : {rating}</p>
        <p>Available Quantity : {quantity}</p>
        <div className="card-actions justify-end">
          {/* <button
            onClick={handleNotify}
            className="btn bg-orange-500 btn-sm my-2"
          >
            See Details
          </button> */}
          <label
            onClick={handleNotify}
            htmlFor="my-modal-5"
            className="btn bg-orange-500 btn-sm my-2"
          >
            See Details
          </label>
          <Toaster position="top-center" reverseOrder={true} />
        </div>
      </div>
      {/* Modal Data */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h1 className="text-2xl text-center font-bold bg-orange-500 text-white rounded-full py-2 my-4 md:w-1/5 mx-auto">
            Details
          </h1>
          <div className="card border-2 lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={photoUrl} alt="Album" />
            </figure>
            <div className="card-body ">
              <h2>
                <span>Seller Name :</span> <span>{sellerName}</span>
              </h2>
              <p>Seller Email : {sellerEmail}</p>
              <p>Toy Name : {toyName}</p>
              <p>Price : {"$" + price}</p>
              <p>Available Quantity : {quantity}</p>

              <div>
                <span>Rating : </span>
                <Rating
                  placeholderRating={rating}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <span> {rating}</span>
              </div>

              <p>Details : {details}</p>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
