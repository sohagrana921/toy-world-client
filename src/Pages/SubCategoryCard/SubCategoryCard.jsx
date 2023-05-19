import { Link } from "react-router-dom";

const SubCategoryCard = ({ toy }) => {
  const { _id, photoUrl, toyName, rating, quantity } = toy;
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={photoUrl} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>Rating : {rating}</p>
        <p>Available Quantity : {quantity}</p>
        <div className="card-actions justify-end">
          <Link to={`/toyDetails/${_id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
