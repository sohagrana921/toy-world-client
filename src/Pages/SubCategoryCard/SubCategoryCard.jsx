import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const SubCategoryCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { _id, photoUrl, toyName, rating, quantity, price } = toy;
  const handleNotify = () => {
    if (!user) {
      toast.error("You have to log in first to view details");
    }
    navigate(`/toyDetails/${_id}`);
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
          <button
            onClick={handleNotify}
            className="btn bg-orange-500 btn-sm my-2"
          >
            See Details
          </button>
          <Toaster position="top-center" reverseOrder={true} />
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
