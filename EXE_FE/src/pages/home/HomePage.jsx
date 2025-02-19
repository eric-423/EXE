import HomePageHeader from '../../components/homePage/homepage-header/HomePageHeader';
import CuisineGallery from '../../components/homePage/cuisinegalley/CuisineGallery';
import BestSeller from '../../components/homePage/best-seller/BestSeller';
import Blogs from '../../components/homePage/blog/Blogs';
import Franchise from '../../components/homePage/franchise/FranchiseComponent';
import Header from '../../components/homePage/Header/Header';
import Footer from '../../components/homePage/Footer/Footer';

const HomePage = () => {
  return <div>
    <Header />
    <HomePageHeader />
    <CuisineGallery />
    <BestSeller />
    <Blogs />
    <Franchise />
    <Footer />
  </div>;
};

export default HomePage;
