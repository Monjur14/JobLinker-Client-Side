import Sponsors from "../Components/Sponsors";
import Banner from "./Banner";
import Categories from "./Categories";
import ExtraSection from "./ExtraSection";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <ExtraSection/>
      <Sponsors/>
    </div>
  );
};

export default Home;
