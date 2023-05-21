import { useContext } from "react";
import Banner from "./Banner";
import Category from "./Category";
import { AuthContext } from "../../Providers/AuthProvider";
import PhotoGallery from "./PhotoGallery";
import TopBrands from "./TopBrands";
import ChooseOne from "./ChooseOne";
import OurServices from "./OurServices";

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
      <PhotoGallery></PhotoGallery>
      <Category></Category>
      <ChooseOne></ChooseOne>
      <OurServices></OurServices>
      <TopBrands></TopBrands>
    </div>
  );
};

export default Home;
