import {
  MainContainer,
  NameLocation,
  WeatherLocation,
  TemperaturePercentage,
  HourPercentContainer,
  SunriseSunsetContainer,
  SunriseSunset,
  NameAppIcon,
  FormSelectCountry,
} from "./styled";
import climaIcon from "../../images/clima.png";
import sunrise from "../../images/sol.png";
import sunset from "../../images/amanecer.png";
import { RiSearch2Line } from "react-icons/ri";

function WeatherResults() {
  return (
    <MainContainer>
      <NameAppIcon>
        <img src={climaIcon} alt="" />
        <h3>Weather Wise</h3>
      </NameAppIcon>
      <FormSelectCountry>
        <input type="text" placeholder="Bogotá" id="city" name="city" />
        <RiSearch2Line className="icon-search" />
      </FormSelectCountry>
      <NameLocation>
        <div>
          <h3>Mejasen Barat</h3>
          <span>Tegal, Indonesia</span>
        </div>
        <p>08:54 AM</p>
      </NameLocation>
      <WeatherLocation>
        <div>
          <img src={climaIcon} alt="" />
          <span>20º C</span>
        </div>
        <div>
          <p>Dramatic Cloudy</p>
        </div>
      </WeatherLocation>
      <TemperaturePercentage>
        <h3>Change of rain</h3>
        <HourPercentContainer percentage={30}>
          <span>7 PM</span>
          <div>
            <div></div>
          </div>
          <span>30%</span>
        </HourPercentContainer>
        <HourPercentContainer percentage={50}>
          <span>8 PM</span>
          <div>
            <div></div>
          </div>
          <span>50%</span>
        </HourPercentContainer>
        <HourPercentContainer percentage={75}>
          <span>9 PM</span>
          <div>
            <div></div>
          </div>
          <span>75%</span>
        </HourPercentContainer>
        <HourPercentContainer percentage={60}>
          <span>10 PM</span>
          <div>
            <div></div>
          </div>
          <span>60%</span>
        </HourPercentContainer>
      </TemperaturePercentage>
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
    </MainContainer>
  );
}

export { WeatherResults };
