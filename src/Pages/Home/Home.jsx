import { useContext } from "react";
import Banner from "./Banner";
import Category from "./Category";
import { AuthContext } from "../../Providers/AuthProvider";
import PhotoGallery from "./PhotoGallery";
import TopBrands from "./TopBrands";
import ChooseOne from "./ChooseOne";

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
      <PhotoGallery></PhotoGallery>
      <ChooseOne></ChooseOne>
      <TopBrands></TopBrands>
    </div>
  );
};

export default Home;
