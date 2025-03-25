import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

//IMPORT ICONS
import {
  faMoon,
  faSun,
  faArrowDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//IMPORT IMAGES
import logo from "../assets/images/JoaoRocha.jpeg";
import PTFlag from "../assets/images/PT-Portugal-Flag-icon.png";
import ENFlag from "../assets/images/GB-United-Kingdom-Flag-icon.png";

function Homepage() {
  //variable to do the translation
  const { t, i18n } = useTranslation();
  const pt = "pt-PT";
  const en = "en-GB"
  const lngPT = useRef();
  const lngEN = useRef();
  //check if the browser's already has language selected, if not select the default value
  const [language, setLanguage] = useState(() => (localStorage.getItem("language") ? localStorage.getItem("language") : en));

  //change language
  function changeLang(lng) {
    setLanguage(lng);
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
    if(lng === pt){
      lngPT.current.className = "w-10 cursor-pointer";
      lngEN.current.className ="w-10 opacity-50 hover:opacity-70 cursor-pointer";
    }else if (lng === en){
      lngEN.current.className = "w-10 cursor-pointer";
      lngPT.current.className = "w-10 opacity-50 hover:opacity-70 cursor-pointer";
    }
  }

  const dark = "dark";
  const light= "light";
  //check if the browser's already has theme selected, if not select the default value
  const [theme, setTheme] = useState(() => (localStorage.getItem("theme") === light ? light : dark));

  //check if its dark
  function isDark() {
    return theme === dark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />;
  }

  //change the color of the theme
  function changeTheme() {
    const newTheme = theme === dark ? light : dark;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
    newTheme?.match(dark)
    ? window.document.documentElement.classList.add(dark)
    : window.document.documentElement.classList.remove(dark);
  }

  useEffect(() => {
    changeLang(language);
    theme.match(dark)
    ? window.document.documentElement.classList.add(dark)
    : window.document.documentElement.classList.remove(dark);
  }, []);

  const handleScroll = () => {
    window.scrollBy({ top: (window.innerWidth/1.2), behavior: "smooth" });
  };

  //open links
  function openInNewTab(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="w-full min-h-screen p-5 bg-white dark:bg-gray-900 dark:text-white">
      <button
        className=" m-2 bg-transparent text-gray-900 dark:text-white text-3xl"
        onClick={changeTheme}
      >
        {isDark()}
      </button>
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          value={theme}
          id="default-toggle"
          onClick={changeTheme}
          className="sr-only peer"
          checked={theme !== "dark"}
          readOnly
        ></input>
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-900"></div>
      </label>
      <div className="box-border h-auto max-w-4xl p-10 border-4 m-auto mt-20 border-gray-900 dark:border-white rounded">
        <div className="grid grid-cols-1">
          <div className="text-center">
            <img
              className="rounded-full p-5 w-52 m-auto"
              src={logo}
              alt="joaorocha"
            />
            <strong className="text-gray-900 dark:text-white">
              João Rocha
            </strong>
            <br />
            <span className="text-center text-gray-900 dark:opacity-60 opacity-80 dark:text-white">
              {t("Short Description")}
            </span>{" "}
            <p className=" text-justify pt-4">{t("Long Description").split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
              ))}
            </p>
          </div>
          <div className="m-auto pt-9 space-x-4 inline-flex">
            <button
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/joaorocha09/")
              }
              className="bg-transparent p-1 rounded-md mt-1 ml-1 text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400 text-3xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
            <button
              onClick={() => openInNewTab("https://github.com/JoaoBruno09")}
              className="bg-transparent p-1 rounded-md mt-1 ml-1 text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400 text-3xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </button>
            <button
              onClick={() => openInNewTab("mailto:joao.bruno86@gmail.com")}
              className="bg-transparent p-1 rounded-md mt-1 ml-1 text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400 text-3xl"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
        </div>
      </div>
      <div className="m-auto mt-5">
        <p className="text-center text-gray-900 dark:opacity-60 opacity-90 dark:text-white">
          {t("Available in")}
        </p>
        <div className="flex justify-center space-x-6 mt-3">
          <img
            ref={lngPT}
            onClick={() => {
              changeLang("pt-PT");
            }}
            className="w-10 opacity-50 hover:opacity-70 cursor-pointer"
            src={PTFlag}
            alt="pt-PT"
          />
          <img
            ref={lngEN}
            onClick={() => {
              changeLang("en-GB");
            }}
            className="w-10 cursor-pointer"
            src={ENFlag}
            alt="en-GB"
          />
        </div>
      </div>
      <div className="m-auto justify-center xs:invisible sm:invisible md:invisible lg:visible xl:visible 2xl:visible">
        <div className="absolute inset-x-0 bottom-0 h-30 text-center animate-bounce">
          <p>{t("Scroll to see more")}</p>
          <button onClick={handleScroll} className="text-xl rounded-full border-gray-900 dark:border-white border-2 p-3 mt-2 ">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
