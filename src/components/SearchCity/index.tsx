import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { FormSelectCity, RenderAllCitiesBySearch } from "./styled";
import { RiSearch2Line } from "react-icons/ri";
import { saveCity, setLoadingFalse } from "../../redux/slices/weatherDataSlice";
import { MessageError } from "../MessageError";
import { STORAGECITYDATA } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import {
  API_URL_GEO_CITIES,
  API_WEATHER,
  GEO_Options,
  API_KEY,
} from "../../services/getCities";

interface ICity {
  id: number;
  city: string;
  region: string;
  countryCode: string;
  latitude: number;
  longitude: number;
}

function SearchCity() {
  const [t] = useTranslation("global");
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [selectedCity, setSelectedCity] = useState<ICity[]>([]);
  const [showCitiesContainer, setShowCitiesContainer] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useAppDispatch();

  /* GET USER IP */
  const getUserLocationByIP = async () => {
    try {
      const request = await fetch("https://api.ipify.org?format=json");
      const response = await request.json();
      const { ip } = response;

      if (ip.length > 0) {
        const request = await fetch(
          `https://ipinfo.io/${ip}?token=8faa97657e5d6d`
        );
        const jsonResponse = await request.json();
        const data = jsonResponse.loc.split(",");
        const lat = data[0];
        const lon = data[1];

        fetch(`${API_WEATHER}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
          .then((response) => response.json())
          .then((locationByIP) => {
            dispatch(saveCity(locationByIP));
          });

        dispatch(setLoadingFalse());
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const cityDatasavedInSstorage =
      window.localStorage.getItem(STORAGECITYDATA);
    if (cityDatasavedInSstorage) {
      dispatch(saveCity(JSON.parse(cityDatasavedInSstorage)));
      dispatch(setLoadingFalse());
    } else {
      getUserLocationByIP();
    }
  }, []);

  /* GET CITIES THAT MATCH THE CITY ENTERED BY THE USER */
  const getCity = async () => {
    if (search !== "") {
      setLoader(true);
      try {
        const response = await fetch(
          `${API_URL_GEO_CITIES}/cities?minPopulation=50000&namePrefix=${search}`,
          GEO_Options
        );
        const data = await response.json();
        if (data.data.length > 0) {
          setSelectedCity(data.data);
          setShowCitiesContainer(true);
          setErrorMessage(false);
        } else {
          setErrorMessage(true);
        }
      } catch (error) {
        alert(t("weatherResult.APIRequestFailure"));
      } finally {
        setLoader(false);
      }
    } else {
      setShowCitiesContainer(false);
    }
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      getCity();
    }, 600);

    return () => clearTimeout(getData);
  }, [search]);

  /* GET INFORMATION ABOUT THE SELECTED CITY */
  const handleSearchCity = async (city: ICity) => {
    try {
      const response = await fetch(
        `${API_WEATHER}?lat=${city.latitude}&lon=${city.longitude}&appid=${API_KEY}`
      );
      const data = await response.json();
      dispatch(saveCity(data));
      setShowCitiesContainer(false);
      window.localStorage.setItem(STORAGECITYDATA, JSON.stringify(data));
    } catch (error) {
      alert(t("weatherResult.APIRequestFailure"));
    }
  };

  return (
    <div>
      <FormSelectCity
        $displayCitiesContainer={showCitiesContainer}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={t("weatherResult.placeholder")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <RiSearch2Line className="icon-search" />
        {loader && <div className="loader"></div>}
      </FormSelectCity>
      {errorMessage && <MessageError />}
      {selectedCity.length > 0 && (
        <RenderAllCitiesBySearch $displayCitiesContainer={showCitiesContainer}>
          <ul>
            {selectedCity.map((city) => (
              <li
                key={city.id}
                className="list-container"
                onClick={() => handleSearchCity(city)}
              >
                <p>{city.city}</p>
                <p>{city.region}</p>
                <p>{city.countryCode}</p>
              </li>
            ))}
          </ul>
        </RenderAllCitiesBySearch>
      )}
    </div>
  );
}

export { SearchCity };
