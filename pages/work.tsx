import Head from "next/head";
import { NextPage } from "next";

const experiences = [
  {
    title: "Full-stack JS developer",
    company: "Scopicsoftware.com, Remote",
    date: "03 2022 - PRESENT (Fulltime)",
    description:
      "As a Full-stack JS Developer at Scopicsoftware.com, I have been entrusted with the responsibility of designing, developing, and maintaining comprehensive full-stack applications. I collaborate closely with cross-functional teams to ensure that project goals are met efficiently and that the applications align with the company's vision.",
  },
  {
    title: "Team Leader",
    company: "Elasnam.com, Algeria/ Chlef",
    date: "05/01/2020 - 05/09/2022 (Contract)",
    description:
      "As a Team Leader at Elasnam.com, I led a team of three talented developers in the creation of a custom full-stack real estate application tailored for the Algerian market. This role required me to provide guidance, set project milestones. I was responsible for overseeing the entire software development from design and development to testing and deployment.",
  },
  {
    title: "Development Specialist",
    company: "ATH.technology, UAE/ Dubai",
    date: "03 2018 - 07 2021 (Part time)",
    description:
      "During my tenure as a Development Specialist at ATH.technology, I played a pivotal role in managing the development process. I collaborated closely with project managers to strategize and plan application architectures.",
  },
  {
    title: "Frontend developer",
    company: "Secomind.ai, Algeria - Remote",
    date: "10/03/2019 - 02/01/2020 (Contract)",
    description:
      "In my position as a Frontend Developer at Secomind.ai, I was entrusted with the task of maintaining an ongoing React application. This involved regularly updating and enhancing the user interface, and implementing new features based on user feedback and project requirements.",
  },
  {
    title: "Freelancer",
    company: "Fiverr.com/adelchemi, Remote",
    date: "05 2017 - 03 2022 (Freelancer)",
    description:
      "As a Freelancer on Fiverr, I offered a wide range of services and technologies. I undertook diverse projects, including VBA Excel, Google Scripts, Wix Code, and React development. My freelancing experience allowed me to work with clients from different industries, honing my skills and expanding my knowledge in response.",
  },
];

const Home: NextPage = () => {
  return (
    <div className="flex flex-row md:m-8">
      <title>Work</title>
      <div className="relative  md:m-8">
        <div
          className="border-r-2 border-gray-200 border-dotted absolute h-full top-0 z-0 left"
          style={{ left: 7 }}
        />
        <ul className="list-none m-0 p-0 space-y-8">
          {experiences.map((item) => (
            <li key={item.title} className="mb-2">
              <div className="flex items-center mb-1">
                <div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
                <div className="flex-1 ml-4 font-medium">
                  <span className="text-green-500">{item.date}</span> /{" "}
                  <strong>{item.company}</strong>
                </div>
              </div>
              <p className="ml-12">
                <strong className="text-gray-600">{item.title}</strong>
                <br />
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
