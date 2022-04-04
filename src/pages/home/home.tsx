import React, {
  useState
} from 'react';
import { useSelector } from 'react-redux';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import DefaultNavButtons from 'src/modules/nav-bar/default-nav-buttons';
import {
  HorizontalSpace
} from '@christopherigm/rrmc';
import HomeTopSlider from 'src/modules/home-top-slider/home-top-slider';
import Footer from 'src/modules/footer/footer';
import SystemConfigurationLoader from 'src/modules/system-configuration-loader/system-configuration-loader';

const sliderNextButtonFile = '/assets/slider-button-next.svg';
const sliderPrevButtonFile = '/assets/slider-button-prev.svg';

const Home = (): React.ReactElement => {
  const [sectionMenu, setSectionMenu]: any = useState([]);
  const system: any = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const sliderNextButtonFileURL = `${prefix}${sliderNextButtonFile}`;
  const sliderPrevButtonFileURL = `${prefix}${sliderPrevButtonFile}`;

  return (
    <>
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
      <HorizontalSpace size='large' />
      <Footer />
      <SystemConfigurationLoader home={true} />
      <SystemCheck />
    </>
  );
};

export default Home;
