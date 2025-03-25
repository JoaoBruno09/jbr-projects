//components
import Homepage from "./components/Homepage";
import Technologies from "./components/Technologies";
import ProfessionalAcademic from "./components/Professional&Academic";
import Footer from "./components/Footer";

//IMPORT ICONS
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Loader} from "./components/Loader";
import { useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
    {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={`${isLoaded ? "opacity-100" : "hidden"}`}>
      <Homepage /> <Technologies /> <ProfessionalAcademic /> <Footer />
      <button className="hidden fixed z-90 bottom-10 right-8 bg-gray-900 dark:bg-white w-auto xs:w-12 h-auto sm:h-12 xs:h-12 p-5 rounded-full drop-shadow-lg flex justify-center items-center text-white dark:text-gray-900 text-xl">
        <FontAwesomeIcon icon={faFileArrowDown} />
        <p className="xs:hidden">&nbsp;Download CV</p>
      </button>
      </div>
    </>
  );
}

export default App;
