import { useTranslation } from "react-i18next";

//IMPORT IMAGES
import html from "../assets/images/technologies/html.png";
import css from "../assets/images/technologies/css.png";
import php from "../assets/images/technologies/php.png";
import javascript from "../assets/images/technologies/javascript.png";
import typescript from "../assets/images/technologies/typescript.png";
import python from "../assets/images/technologies/python.png";
import java from "../assets/images/technologies/java.png";
import dart from "../assets/images/technologies/dart.png";
import bootstrap from "../assets/images/technologies/bootstrap.png";
import tailwind from "../assets/images/technologies/tailwind.png";
import codeigniter from "../assets/images/technologies/codeigniter.png";
import node from "../assets/images/technologies/node.png";
import react from "../assets/images/technologies/react.png";
import angular from "../assets/images/technologies/angular.png";
import flutter from "../assets/images/technologies/flutter.png";
import ionic from "../assets/images/technologies/ionic.png";
import git from "../assets/images/technologies/git.png";
import github from "../assets/images/technologies/github.png";
import gitlab from "../assets/images/technologies/gitlab.png";
import bitbucket from "../assets/images/technologies/bitbucket.png";
import mysql from "../assets/images/technologies/mysql.png";
import sqlserver from "../assets/images/technologies/sql-server.png";

function Technologies() {
  //variable to do the translation
  const { t, i18n } = useTranslation();

  return (
    <div className="container2xl min-h-screen p-5 bg-bg-tech bg-cover bg-blend-screen bg-gray-900  dark:text-white">
      <div className="box-border h-auto max-w-7xl p-10 m-auto mt-20 rounded dark:bg-gray-900 bg-white">
        <div className="grid grid-cols-2 gap-4 divide-x dark:divide-white divide-gray-900">
          <div className="text-center text-gray-900 dark:text-white">
            <h1 className="text-lg font-bold">{t("Languages")}</h1>
            <div className="grid grid-cols-4 gap-4">
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={html}
                  alt="html"
                  title="html"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={css}
                  alt="css"
                  title="css"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={php}
                  alt="php"
                  title="php"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={javascript}
                  alt="javascript"
                  title="javascript"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={typescript}
                  alt="typescript"
                  title="typescript"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={java}
                  alt="java"
                  title="java"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={python}
                  alt="python"
                  title="python"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={dart}
                  alt="dart"
                  title="dart"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-900 dark:text-white">
            <h1 className="text-lg font-bold">{t("Frameworks")}</h1>{" "}
            <div className="grid grid-cols-4 gap-4">
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={bootstrap}
                  alt="bootstrap"
                  title="bootstrap"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={tailwind}
                  alt="tailwind"
                  title="tailwind"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={codeigniter}
                  alt="codeigniter"
                  title="codeigniter"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={node}
                  alt="node"
                  title="node"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={react}
                  alt="react"
                  title="react"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={angular}
                  alt="angular"
                  title="angular"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={flutter}
                  alt="flutter"
                  title="flutter"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={ionic}
                  alt="ionic"
                  title="ionic"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10 divide-x dark:divide-white divide-gray-900">
          <div className="text-center text-gray-900 dark:text-white">
            <h1 className="text-lg font-bold">{t("Databases")}</h1>
            <div className="grid grid-cols-4 gap-4">
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={git}
                  alt="git"
                  title="git"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={github}
                  alt="github"
                  title="github"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={gitlab}
                  alt="gitlab"
                  title="gitlab"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={bitbucket}
                  alt="bitbucket"
                  title="bitbucket"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-900 dark:text-white">
            <h1 className="text-lg font-bold">{t("Tools")}</h1>{" "}
            <div className="grid grid-cols-4 gap-4">
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={mysql}
                  alt="mysql"
                  title="mysql"
                />
              </div>
              <div className="mt-5">
                <img
                  className="p-5 w-32 opacity-20 hover:opacity-80"
                  src={sqlserver}
                  alt="sqlserver"
                  title="sqlserver"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
