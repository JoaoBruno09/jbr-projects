import { useTranslation } from "react-i18next";

//IMPORT IMAGES
import html from "../assets/images/technologies/html.png";
import css from "../assets/images/technologies/css.png";
import php from "../assets/images/technologies/php.png";
import javascript from "../assets/images/technologies/javascript.png";
import typescript from "../assets/images/technologies/typescript.png";
import java from "../assets/images/technologies/java.png";
import bootstrap from "../assets/images/technologies/bootstrap.png";
import tailwind from "../assets/images/technologies/tailwind.png";
import codeigniter from "../assets/images/technologies/codeigniter.png";
import node from "../assets/images/technologies/node.png";
import react from "../assets/images/technologies/react.png";
import angular from "../assets/images/technologies/angular.png";
import ionic from "../assets/images/technologies/ionic.png";
import git from "../assets/images/technologies/git.png";
import github from "../assets/images/technologies/github.png";
import gitlab from "../assets/images/technologies/gitlab.png";
import bitbucket from "../assets/images/technologies/bitbucket.png";
import springboot from "../assets/images/technologies/springboot.png"
import jenkins from "../assets/images/technologies/jenkins.png"
import docker from "../assets/images/technologies/docker.png"
import swagger from "../assets/images/technologies/swagger.png"
import sql from "../assets/images/technologies/sql.png"

function Technologies() {
  //variable to do the translation
  const { t} = useTranslation();
  const languages = [
    {name: "java", src: java},
    {name: "sql", src: sql},
    {name: "javascript", src: javascript},
    {name: "typescript", src: typescript},
    {name: "html", src: html},
    {name: "css", src: css},
    {name: "php", src: php}];

  const frameworks = [
    {name: "springboot", src: springboot},
    {name: "node", src: node},
    {name: "angular", src: angular},
    {name: "react", src: react},
    {name: "ionic", src: ionic},
    {name: "bootstrap", src: bootstrap},
    {name: "tailwind", src: tailwind},
    {name: "codeigniter", src: codeigniter}
  ]

  const tools = [
    {name: "git", src: git},
    {name: "github", src: github},
    {name: "gitlab", src: gitlab},
    {name: "bitbucket", src: bitbucket},
    {name: "swagger", src: swagger},
    {name: "jenkins", src: jenkins},
    {name: "docker", src: docker}
  ]

  return (
    <div className="container2xl p-5 md:p-20 lg:p-20 xl:p-20 2xl:p-20 bg-bg-tech bg-cover bg-blend-screen bg-gray-900  dark:text-white">
      <div className="box-border h-auto max-w-7xl p-10 m-auto rounded dark:bg-gray-900 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 dark:divide-white divide-gray-900 md:divide-x lg:divide-x xl:divide-x 2xl:divide-x">
          {/* Languages */}
          <div className="text-center text-gray-900 dark:text-white pt-5">
            <h1 className="text-lg font-bold">{t("Languages")}</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 lg:gap-4 xl:gap-4 2xl:gap-4">
              {languages.map((item, index) => (
                <div className="mt-5" key={index}>
                  <img
                    className="p-5 w-32 opacity-20 hover:opacity-80"
                    src={item.src}
                    alt={item.name}
                    title={item.name}
                  />
              </div>)
              )}
            </div>
          </div>
          {/* Frameworks */}
          <div className="text-center text-gray-900 dark:text-white pt-5" >
            <h1 className="text-lg font-bold">{t("Frameworks")}</h1>{" "}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 lg:gap-4 xl:gap-4 2xl:gap-4">
            {frameworks.map((item, index) => (
                <div className="mt-5" key={index}>
                  <img
                    className="p-5 w-32 opacity-20 hover:opacity-80"
                    src={item.src}
                    alt={item.name}
                    title={item.name}
                  />
              </div>)
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 dark:divide-white divide-gray-900 pt-5">
          {/* Tools */}
          <div className="text-center text-gray-900 dark:text-white">
            <h1 className="text-lg font-bold">{t("Tools")}</h1>
            <div className="grid grid-cols-2 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 2xl:grid-cols-8 lg:gap-4 xl:gap-4 2xl:gap-4">
            {tools.map((item, index) => (
                <div className="mt-5" key={index}>
                  <img
                    className="p-5 w-32 opacity-20 hover:opacity-80"
                    src={item.src}
                    alt={item.name}
                    title={item.name}
                  />
              </div>)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
