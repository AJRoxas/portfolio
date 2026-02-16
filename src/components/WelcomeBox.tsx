import box from '../assets/svg/hero/box.svg';
import curves from '../assets/svg/hero/curves.svg';
import donut from '../assets/svg/hero/donut.svg';
import dots from '../assets/svg/hero/dots.svg';
import plus from '../assets/svg/hero/plus.svg';
import semicircle from '../assets/svg/hero/semicircle.svg';
import triangle from '../assets/svg/hero/triangle.svg';
import welcome from '../assets/svg/hero/welcome.svg';

const WelcomeBox = () => {
  return (
    <>
      <div className="relative h-50 w-75 welcome-box-container">
        <img src={box} className="absolute welcome-box" />
        <img src={welcome} className="absolute welcome-welcome" />
        <div className="absolute welcome-donut-dots">
          <img src={donut} className="absolute welcome-donut" />
          <img src={dots} className="absolute welcome-dots" />
        </div>
        <div className="absolute welcome-curves-semicircle">
          <img src={semicircle} className="absolute welcome-semicircle" />
          <img src={curves} className="absolute welcome-curves" />
        </div>
        <div className="absolute welcome-plus-triangle">
          <img src={triangle} className="absolute welcome-triangle" />
          <img src={plus} className="absolute welcome-plus" />
        </div>
      </div>
    </>
  );
};

export default WelcomeBox;
