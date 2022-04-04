import React, {
  useState
} from 'react';
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import 'src/modules/home-top-slider/home-top-slider.scss';
import { Title } from 'rrmc';

const SlideAddons = ( props: any ): React.ReactElement => {
  const sliderNextButtonFileURL = props.sliderNextButtonFileURL;
  const sliderPrevButtonFileURL = props.sliderPrevButtonFileURL;
  const swiper = props.swiper;

  return (
    <>
      <div
        className='Swiper__navigation-button Swiper__navigation-button--left z-depth-2'
        style={{ backgroundImage: `url(${sliderPrevButtonFileURL})` }}
        onClick={() => {
          if ( swiper ) swiper.slidePrev();
        }}></div>
      <div
        className='Swiper__navigation-button Swiper__navigation-button--right z-depth-2'
        style={{ backgroundImage: `url(${sliderNextButtonFileURL})` }}
        onClick={() => {
          if ( swiper ) swiper.slideNext();
        }}></div>
      <div className='swiper-pagination'></div>
    </>
  );
};

interface SlideTextInterface {
  name: string;
  description?: string;
  link?: string;
  align: string;
}

const SlideText = (props: SlideTextInterface) => {
  const align = (props.align === 'left' ||
    props.align === 'bottom_left') ? 'left' :
    (props.align === 'right' ||
    props.align === 'bottom_right') ? 'right' : 'center';
  return (
    <div className={`HomeTopSlider__text-wrapper HomeTopSlider__text-wrapper--${props.align}`}>
      <Title
        text={props.name}
        fullWidth={true}
        shadow={true}
        align={align} />
      <div
        className='HomeTopSlider__description'
        dangerouslySetInnerHTML={{__html: props.description || ''}}></div>
      {}
    </div>
  );
};

const HomeTopSlider = (props: any): React.ReactElement => {
  const [swiperReference, setSwiperReference]: any = useState(null);
  const items = props.items;

  const onSwiper = ( swiper: any ) => {
    setSwiperReference(swiper);
  };

  return (
    <>
    {
      items && items.length ?
        <div className='HomeTopSlider z-depth-2'>
        <Swiper
          className='Swiper'
          autoplay={true}
          effect='slide'
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSwiper={onSwiper}
          pagination={{
            el: '.swiper-pagination', type: 'bullets', clickable: true
          }}
        >
          {
            items.map((item: any, index: any ) => {
              if ( !item.attributes ) return null;
              return (
                <SwiperSlide
                  className='Swiper__slide'
                  key={index}
                  virtualIndex={index}>
                  <div
                    className='Swiper__content'
                    style={{
                      backgroundImage: `url(${item.attributes.img_picture})`
                    }}>
                    {
                      item.attributes.name ||
                      item.attributes.description ?
                        <SlideText
                          name={item.attributes.name}
                          description={item.attributes.description}
                          align={item.attributes.position} /> : null
                    }
                  </div>
                </SwiperSlide>
              );
            })
          }
          <SlideAddons
            swiper={swiperReference}
            sliderNextButtonFileURL={props.sliderNextButtonFileURL}
            sliderPrevButtonFileURL={props.sliderPrevButtonFileURL} />
        </Swiper>
      </div> : null
    }
    </>
  );
};

export default HomeTopSlider;
