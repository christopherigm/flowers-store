import React, {
  useState
} from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import DefaultNavButtons from 'src/modules/nav-bar/default-nav-buttons';
import { HorizontalSpace } from 'rrmc';
import Footer from 'src/modules/footer/footer';

const About = (): React.ReactElement => {
  const [sectionMenu, setSectionMenu]: any = useState([]);

  return (
    <div className='page'>
      <NavBar sectionMenu={sectionMenu} />
      <DefaultNavButtons setSectionMenu={setSectionMenu} />
      <HorizontalSpace size='medium' />
      About
      <HorizontalSpace size='large' />
      <Footer />
      <SystemCheck />
    </div>
  );
};

export default About;
