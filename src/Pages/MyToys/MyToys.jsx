/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [control, setControl] = useState(false);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [control, user]);
  console.log(myToys);
  return (
    <div>
      <h2>Mt toys here:{myToys.length}</h2>
    </div>
  );
};

export default MyToys;
