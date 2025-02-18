import HomePageHeader from "../../components/homePage/HomePageHeader";
import CuisineGallery from "../../components/homePage/CuisineGallery";
import BestSeller from "../../components/homePage/BestSeller";

const HomePage = () => {
  return (
    <div>
      <HomePageHeader />
      <CuisineGallery />
      <BestSeller />
    </div>
  );
};

export default HomePage;
