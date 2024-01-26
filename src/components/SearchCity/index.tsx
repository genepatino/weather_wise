import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { FormSelectCity, RenderAllCitiesBySearch } from "./styled";
import { RiSearch2Line } from "react-icons/ri";
import { saveCity } from "../../redux/slices/citiesSlice";
import { MessageError } from "../MessageError";
import { STORAGECITYDATA } from "../../utils/consts";
import {
  API_URL_GEO_CITIES,
  API_WEATHER,
  GEO_Options,
  API_KEY,
} from "../../services/getCities";

interface ICities {
  id: number;
  city: string;
  region: string;
  countryCode: string;
  latitude: number;
  longitude: number;
}

function SearchCity() {
  const [search, setSearch] = useState("");
  const [cityEnteredByUser, setCityEnteredByUser] = useState<ICities[]>([]);
  const [showCitiesContainer, setShowCitiesContainer] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useAppDispatch();

  const getUserLocationByIP = async () => {
    const reponse = await fetch("https://api.ipify.org?format=json");
    const data = await reponse.json();
    const { ip } = data;

    fetch(`http://ip-api.com/json/${ip}?fields=status,message,lat,lon`)
      .then((response) => response.json())
      .then((data) => {
        const { lat, lon } = data;
        fetch(`${API_WEATHER}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
          .then((response) => response.json())
          .then((locationByIP) => {
            dispatch(saveCity(locationByIP));
          });
      });
  };

  useEffect(() => {
    const cityDatasavedInSstorage =
      window.localStorage.getItem(STORAGECITYDATA);
    cityDatasavedInSstorage
      ? dispatch(saveCity(JSON.parse(cityDatasavedInSstorage)))
      : getUserLocationByIP();
  }, []);

  const getCity = async () => {
    if (search !== "") {
      try {
        const response = await fetch(
          `${API_URL_GEO_CITIES}/cities?minPopulation=50000&namePrefix=${search}`,
          GEO_Options
        );
        console.log(response);
        const data = await response.json();
        if (data.data.length > 0) {
          setCityEnteredByUser(data.data);
          setShowCitiesContainer(true);
          setErrorMessage(false);
        } else {
          setErrorMessage(true);
        }
      } catch (error) {
        console.log("no se ha podido realizar la consulta");
      }
    }
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      getCity();
    }, 900);

    return () => clearTimeout(getData);
  }, [search]);

  const handleSearchCity = async (city: ICities) => {
    try {
      const response = await fetch(
        `${API_WEATHER}?lat=${city.latitude}&lon=${city.longitude}&appid=${API_KEY}`
      );
      const data = await response.json();
      dispatch(saveCity(data));
      setShowCitiesContainer(false);
      window.localStorage.setItem(STORAGECITYDATA, JSON.stringify(data));
    } catch (error) {
      console.log("no se ha podido realizar la consulta");
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
          placeholder="Bogotá"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <RiSearch2Line className="icon-search" />
      </FormSelectCity>
      {errorMessage && <MessageError />}
      {cityEnteredByUser.length > 0 && (
        <RenderAllCitiesBySearch $displayCitiesContainer={showCitiesContainer}>
          <ul>
            {cityEnteredByUser.map((city) => (
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
