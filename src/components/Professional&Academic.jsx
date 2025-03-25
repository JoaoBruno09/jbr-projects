import { useTranslation } from "react-i18next";
//IMPORT ICONS
import { faBriefcase, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profissional() {
  //variable to do the translatin
  const { t, i18n } = useTranslation();

  //get the jobs in each language
  const jobs = i18n.options.resources[i18n.language + "_jobs"];

  //get the universities in each language
  const facs = i18n.options.resources[i18n.language + "_facs"];

  return (
    <div className="container2xl min-h-screen p-5 bg-white dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl m-auto mt-1">
        <h1 className="text-3xl font-bold text-center p-10">
          {t("Professional Experience")}
        </h1>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {jobs.map((job, index) => {
            return (
              <li key={index} className="mb-10 ml-6 m-auto">
                <div className="grid grid-cols-12">
                  <div>
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-900 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-white">
                      <FontAwesomeIcon
                        className="w-3 h-3 text-white dark:text-gray-900"
                        icon={faBriefcase}
                      />
                    </span>
                    <img
                      className="p-0.5 md:p-2 lg:p-3 xl:p-3 2xl:p-3 w-20 rounded-3xl"
                      src={job.CompanyImage}
                      alt={job["Company Name"]}
                      title={job["Company Name"]}
                    />
                  </div>
                  <div className="col-span-11">
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {job["Job Position"]} - {job["Company Name"]}{" "}
                      {job["End Date"] === "" && (
                        <span className="bg-gray-900 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-gray-900 ml-3">
                          {t("Present")}
                        </span>
                      )}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {job["Start Date"]}&nbsp;-&nbsp;
                      {job["End Date"]}
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                      {job["Job Description"]}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="max-w-7xl m-auto mt-1">
        <h1 className="text-3xl font-bold text-center p-10">
          {t("Academic Education")}
        </h1>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {facs.map((fac, index) => {
            return (
              <li key={index} className="mb-10 ml-6 m-auto">
                <div className="grid grid-cols-12">
                  <div>
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-900 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-white">
                      <FontAwesomeIcon
                        className="w-3 h-3 text-white dark:text-gray-900"
                        icon={faBook}
                      />
                    </span>
                    <img
                      className="p-3 w-20 rounded-3xl"
                      src={fac.UniversityImage}
                      alt={fac["University Name"]}
                      title={fac["University Name"]}
                    />
                  </div>
                  <div className="col-span-11">
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {fac["University Course"]} - {fac["University Name"]}{" "}
                      {fac["End Date"] === "" && (
                        <span className="bg-gray-900 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-gray-900 ml-3">
                          {t("Present")}
                        </span>
                      )}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {fac["Start Date"]}&nbsp;-&nbsp;
                      {fac["End Date"]}
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                      {fac["University Description"]}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Profissional;
