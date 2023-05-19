import { useContext } from "react";
import Banner from "./Banner";
import Category from "./Category";
import ShopByAge from "./ShopByAge";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ShopByAge></ShopByAge>
    </div>
  );
};

export default Home;
