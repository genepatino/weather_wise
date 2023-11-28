import { useTranslation } from "react-i18next";

import "./App.css";

function App() {
  const [t, i18n] = useTranslation("global");

  const saveLanguage = (language: string) => {
    if (language === "es") {
      i18n.changeLanguage("es");
    } else if (language === "en") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("pt_br");
    }
  };

  return (
    <div>
      <header>{t("header.hello-world")}</header>
      <br />
      <button onClick={() => saveLanguage("es")}>ES</button>
      <button onClick={() => saveLanguage("en")}>EN</button>
      <button onClick={() => saveLanguage("pt_br")}>PT-BR</button>
    </div>
  );
}

export default App;

/* GUARDAR 
  window.localStorage.setItem(activeTasksLocalStorageKey, JSON.stringify([...prev, newTask])); 
  
  OBTENER
 const [activeTasks, setActiveTasks] = useState<Task[]>(() => {
    const activeTasksFromLocalStorage = window.localStorage.getItem(
      activeTasksLocalStorageKey
    );
    return activeTasksFromLocalStorage
      ? JSON.parse(activeTasksFromLocalStorage)
      : [];
  });
*/
