import { SunriseSunset, SunriseSunsetContainer } from "./styled";
import sunrise from "../../images/sol.png";
import sunset from "../../images/amanecer.png";
import { useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";
import { LoadingSkeleton } from "../LoadingSkeleton";

function SunriseandSunset() {
  const [t] = useTranslation("global");

  const getSunrise = useAppSelector(
    (state) => state.weatherData.cityData.sys.sunrise
  );
  const getSunsete = useAppSelector(
    (state) => state.weatherData.cityData.sys.sunset
  );

  const loading = useAppSelector((state) => state.weatherData.loading);

  const timeSunrise =
    getSunrise && new Date(getSunrise * 1000).toTimeString().slice(0, 5);
  const timeSunsete =
    getSunsete && new Date(getSunsete * 1000).toTimeString().slice(0, 5);
  const currenTime = new Date().toTimeString().slice(0, 5);

  const hourSunrise = timeSunrise && Number(timeSunrise.split(":")[0]);
  const hourSunsete = timeSunsete && Number(timeSunsete.split(":")[0]);
  const hourCurrenTimer = Number(currenTime.split(":")[0]);

  const howLongAgoSunrise = hourSunrise && hourCurrenTimer - hourSunrise;
  const howLongDoesSunset = hourSunsete && hourSunsete - hourCurrenTimer;

  /* SUNRISE MESSAGE*/
  let sunriseMessage;
  let valueHoursOrhour;

  if (howLongAgoSunrise && Math.sign(howLongAgoSunrise) === -1) {
    const positiveHowLongAgoSunrise =
      howLongDoesSunset && howLongDoesSunset * -1;
    positiveHowLongAgoSunrise && positiveHowLongAgoSunrise > 1
      ? (valueHoursOrhour = `${t("weatherResult.hours")}`)
      : (valueHoursOrhour = `${t("weatherResult.hour")}`);
    sunriseMessage = `${t("weatherResult.complmentMessageInSunriseSunset", {
      hour: positiveHowLongAgoSunrise,
      hourOrhours: valueHoursOrhour,
    })}`;
  } else {
    howLongAgoSunrise && howLongAgoSunrise > 1
      ? (valueHoursOrhour = `${t("weatherResult.hours")}`)
      : (valueHoursOrhour = `${t("weatherResult.hour")}`);
    sunriseMessage = `${t("weatherResult.complmentMessageAgoSunriseSunset", {
      hour: howLongAgoSunrise,
      hourOrhours: valueHoursOrhour,
    })}`;
  }

  /* SUNSETE MESSAGE */
  let sunsetMessage;

  if (howLongDoesSunset && Math.sign(howLongDoesSunset) === -1) {
    const positiveHowLongDoesSunset = howLongDoesSunset * -1;
    positiveHowLongDoesSunset > 1
      ? (valueHoursOrhour = `${t("weatherResult.hours")}`)
      : (valueHoursOrhour = `${t("weatherResult.hour")}`);
    sunsetMessage = `${t("weatherResult.complmentMessageAgoSunriseSunset", {
      hour: positiveHowLongDoesSunset,
      hourOrhours: valueHoursOrhour,
    })}`;
  } else {
    howLongDoesSunset && howLongDoesSunset > 1
      ? (valueHoursOrhour = `${t("weatherResult.hours")}`)
      : (valueHoursOrhour = `${t("weatherResult.hour")}`);
    sunsetMessage = `${t("weatherResult.complmentMessageInSunriseSunset", {
      hour: howLongDoesSunset,
      hourOrhours: valueHoursOrhour,
    })}`;
    //sunsetMessage = `en ${howLongDoesSunset} ${valueHoursOrhour}`;
  }

  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <SunriseSunsetContainer>
          <h3>{t("weatherResult.sunrise-sunset")}</h3>
          <div className="wrapped">
            <SunriseSunset>
              <div>
                <img src={sunrise} alt="" />
                <div className="container">
                  <span className="sunrise">{t("weatherResult.sunrise")}</span>
                  {getSunrise && getSunrise > 0 && (
                    <span className="hour">{timeSunrise + " AM"}</span>
                  )}
                </div>
              </div>
              <span className="then">{sunriseMessage}</span>
            </SunriseSunset>
            <SunriseSunset>
              <div>
                <img src={sunset} alt="" />
                <div className="container">
                  <span className="sunrise">{t("weatherResult.sunset")}</span>
                  {getSunsete && getSunsete > 0 && (
                    <span className="hour">{timeSunsete + " PM"}</span>
                  )}
                </div>
              </div>
              <span className="then">{sunsetMessage}</span>
            </SunriseSunset>
          </div>
        </SunriseSunsetContainer>
      )}
    </>
  );
}

export { SunriseandSunset };
