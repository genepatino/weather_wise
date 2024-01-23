import { SunriseSunset, SunriseSunsetContainer } from "./styled";
import sunrise from "../../images/sol.png";
import sunset from "../../images/amanecer.png";
import { useAppSelector } from "../../redux/hooks";

function SunriseandSunset() {
  const getSunrise = useAppSelector((state) => state.city.sys.sunrise);
  const getSunsete = useAppSelector((state) => state.city.sys.sunset);

  const timeSunrise = new Date(getSunrise * 1000).toTimeString().slice(0, 5);
  const timeSunsete = new Date(getSunsete * 1000).toTimeString().slice(0, 5);
  const currenTime = new Date().toTimeString().slice(0, 5);

  const hourSunrise = Number(timeSunrise.split(":")[0]);
  const hourSunsete = Number(timeSunsete.split(":")[0]);
  const hourCurrenTimer = Number(currenTime.split(":")[0]);

  const howLongAgoSunrise = hourCurrenTimer - hourSunrise;
  const howLongDoesSunset = hourSunsete - hourCurrenTimer;

  /* SUNSETE MESSAGE */
  let sunsetMessage;
  let complementSunsete;

  if (Math.sign(howLongDoesSunset) === -1) {
    const positiveValue = howLongDoesSunset * -1;
    positiveValue > 1
      ? (complementSunsete = "hours")
      : (complementSunsete = "hour");
    sunsetMessage = `${positiveValue} ${complementSunsete} ago`;
  } else {
    howLongDoesSunset > 1
      ? (complementSunsete = "hours")
      : (complementSunsete = "hour");
    sunsetMessage = `in ${howLongDoesSunset} ${complementSunsete}`;
  }

  /* SUNRISE MESSAGE*/
  let sunriseMessage;
  let complementSunrise;

  if (Math.sign(howLongAgoSunrise) === -1) {
    const positiveValue = howLongDoesSunset * -1;
    positiveValue > 1
      ? (complementSunsete = "hours")
      : (complementSunsete = "hour");
    sunriseMessage = `in ${positiveValue} ${complementSunrise}`;
  } else {
    howLongAgoSunrise > 1
      ? (complementSunrise = "hours")
      : (complementSunrise = "hour");
    sunriseMessage = `${howLongAgoSunrise} ${complementSunrise} ago`;
  }

  return (
    <SunriseSunsetContainer>
      <h3>Sunrise & Sunset</h3>
      <div className="wrapped">
        <SunriseSunset>
          <div>
            <img src={sunrise} alt="" />
            <div className="container">
              <span className="sunrise">Sunrise</span>
              {getSunrise > 0 ? (
                <span className="hour">{timeSunrise + " AM"}</span>
              ) : (
                <span className="hour">{"06:10 AM"}</span>
              )}
            </div>
          </div>
          <span className="then">{sunriseMessage}</span>
        </SunriseSunset>
        <SunriseSunset>
          <div>
            <img src={sunset} alt="" />
            <div className="container">
              <span className="sunrise">Sunset</span>
              {getSunsete > 0 ? (
                <span className="hour">{timeSunsete + " PM"}</span>
              ) : (
                <span className="hour">{"18:04 PM"}</span>
              )}
            </div>
          </div>
          <span className="then">{sunsetMessage}</span>
        </SunriseSunset>
      </div>
    </SunriseSunsetContainer>
  );
}

export { SunriseandSunset };
