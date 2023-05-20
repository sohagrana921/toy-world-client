import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  const {
    photoUrl,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    details,
  } = toyDetails;

  return (
    <div className="my-container">
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

          <p>Description : {details}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
