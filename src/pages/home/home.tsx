import React, {
  useState
} from 'react';
import { useSelector } from 'react-redux';
import SystemCheck from 'src/components/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import DefaultNavButtons from 'src/modules/nav-bar/default-nav-buttons';
import HomeTopSlider from 'src/modules/home-top-slider/home-top-slider';
import Footer from 'src/components/footer/footer';
import SystemConfigurationLoader from 'src/components/system-configuration-loader/system-configuration-loader';
import HighlightedProducts from 'src/modules/highlighted-products/highlighted-products';
import CategoriesGrid from 'src/modules/categories-grid/categories-grid';

const sliderNextButtonFile = '/assets/slider-button-next.svg';
const sliderPrevButtonFile = '/assets/slider-button-prev.svg';

const Home = (): React.ReactElement => {
  const [sectionMenu, setSectionMenu]: any = useState([]);
  const system: any = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const sliderNextButtonFileURL = `${prefix}${sliderNextButtonFile}`;
  const sliderPrevButtonFileURL = `${prefix}${sliderPrevButtonFile}`;

  return (
    <div className='page'>
      <NavBar sectionMenu={sectionMenu} />
      <DefaultNavButtons setSectionMenu={setSectionMenu} />
      {
        system && system.configurations && system.configurations.id &&
        system.configurations.relationships &&
        system.configurations.relationships.home_pictures &&
        system.configurations.relationships.home_pictures.data &&
        system.configurations.relationships.home_pictures.data.length ?
          <HomeTopSlider
            items={system.configurations.relationships.home_pictures.data}
            sliderNextButtonFileURL={sliderNextButtonFileURL}
            sliderPrevButtonFileURL={sliderPrevButtonFileURL} /> : null
      }
      <HighlightedProducts />
      <CategoriesGrid />
      <Footer />
      <SystemConfigurationLoader home={true} />
      <SystemCheck />
    </div>
  );
};

export default Home;
