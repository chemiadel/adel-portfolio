import Head from "next/head";
import { NextPage } from "next";
import { PortfolioCard } from "components/work-card";
import work from "../data/work.json";

const Home: NextPage = () => {
  return (
    <main>
      <div className="flex flex-col lg:flex-row">
        <title>About</title>
        <div className="flex-grow">
          <div className="text-5xl font-bold"> Adel Chemi </div>
          <div className="text-md font-semibold max-w-xl space-y-4 py-4 tracking-wide leading-relaxed">
            <p>
              Hi, I am full-stack JavaScript/TypeScript web developer. <br />
            </p>
            <p>
              Started programming first time in highschool where I was playing
              with Excel formula, and I tried to create to create my custom
              function where I discorved VBA and it was my starting.
            </p>
            <p>
              Spend my daily time on building, learning anything relates with
              JavaScript/TypeScript and ReactJS, and all about JAMSTACK
              frameworks.
            </p>
          </div>
        </div>
        <div className="space-y-2 mx-auto">
          <img
            className="w-72"
            src="https://github-readme-stackoverflow.vercel.app/?userID=9493369&layout=compact"
          />
          <img
            className="w-72"
            src="https://github-readme-stats.vercel.app/api?username=chemiadel&hide_rank=true&theme=graywhite&show_icons=true"
          />
        </div>
      </div>
      <hr />
      {/* portfolio */}
      <h1 className="text-4xl font-bold py-10">PORTFOLIO</h1>
      <div className="flex flex-row flex-col bg-white space-y-5">
        {Object.keys(work).map((key) => (
          <PortfolioCard
            key={key}
            title={key}
            link={(work as any)?.[key]?.["Website"] || ""}
            description={(work as any)?.[key]?.["Description"] || ""}
            screenshot={(work as any)?.[key]?.["screenshot"] || ""}
            technologies={(work as any)[key]["technologies"] || []}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
