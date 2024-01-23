import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FormSelectCity, RenderAllCitiesBySearch } from "./styled";
import { RiSearch2Line } from "react-icons/ri";
import { saveCity } from "../../redux/slices/citiesSlice";
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
  const [allCitiesBySearch, setAllCitiesBySearch] = useState<ICities[]>([]);

  const citySelect = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const getCity = async () => {
    if (search !== "") {
      try {
        const response = await fetch(
          `${API_URL_GEO_CITIES}/cities?minPopulation=50000&namePrefix=${search}`,
          GEO_Options
        );
        const data = await response.json();
        setAllCitiesBySearch(data.data);
      } catch (error) {
        console.log("no se ha podido realizar la consulta");
      }
    }
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      getCity();
    }, 1000);
    return () => clearTimeout(getData);
  }, [search]);

  const handleSearchCity = async (city: ICities) => {
    try {
      const response = await fetch(
        `${API_WEATHER}?lat=${city.latitude}&lon=${city.longitude}&appid=${API_KEY}`
      );
      const data = await response.json();
      console.log({ data });
      dispatch(saveCity(data));
      setAllCitiesBySearch([]);
    } catch (error) {
      console.log("no se ha podido realizar la consulta");
    }
  };

  return (
    <div>
      <FormSelectCity
        $displayCities={
          allCitiesBySearch?.length > 0 && Object.entries(citySelect).length > 1
        }
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
      {allCitiesBySearch.length > 0 && (
        <RenderAllCitiesBySearch>
          <ul>
            {allCitiesBySearch.map((city) => (
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
