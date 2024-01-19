import { SunriseSunset, SunriseSunsetContainer } from "./styled";
import sunrise from "../../images/sol.png";
import sunset from "../../images/amanecer.png";

function SunriseandSunset() {
  return (
    <SunriseSunsetContainer>
      <h3>Sunrise & Sunset</h3>
      <div className="wrapped">
        <SunriseSunset>
          <div>
            <img src={sunrise} alt="" />
            <div className="container">
              <span className="sunrise">Sunrise</span>
              <span className="hour">4:20 AM</span>
            </div>
          </div>
          <span className="then">4 hours ago</span>
        </SunriseSunset>
        <SunriseSunset>
          <div>
            <img src={sunset} alt="" />
            <div className="container">
              <span className="sunrise">Sunset</span>
              <span className="hour">5:50 PM</span>
            </div>
          </div>
          <span className="then"> in 9 hours</span>
        </SunriseSunset>
      </div>
    </SunriseSunsetContainer>
  );
}

export { SunriseandSunset };
