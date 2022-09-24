//components
import Homepage from "./components/Homepage";
import Technologies from "./components/Technologies";
import ProfessionalAcademic from "./components/Professional&Academic";
import Footer from "./components/Footer";

//IMPORT ICONS
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  //check if the browser's color of user is dark or light
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? window.document.documentElement.classList.add("dark")
    : window.document.documentElement.classList.remove("dark");
  return (
    <>
      <Homepage /> <Technologies /> <ProfessionalAcademic /> <Footer />
      <button className="fixed z-90 bottom-10 right-8 bg-gray-900 dark:bg-white w-auto xs:w-12 h-auto sm:h-12 xs:h-12 p-5 rounded-full drop-shadow-lg flex justify-center items-center text-white dark:text-gray-900 text-xl">
        <FontAwesomeIcon icon={faFileArrowDown} />
        <p className="xs:hidden">&nbsp;Download CV</p>
      </button>
    </>
  );
}

export default App;
