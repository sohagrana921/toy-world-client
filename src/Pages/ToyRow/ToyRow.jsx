import { Link } from "react-router-dom";

const ToyRow = ({ toy, index }) => {
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{toy.sellerName}</td>
      <td>{toy.toyName}</td>
      <td>{toy.subCategory}</td>
      <td>{toy.price}</td>
      <td>{toy.quantity}</td>
      <td>
        <Link
          className="btn btn-outline btn-success"
          to={`/toyDetails/${toy._id}`}
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
