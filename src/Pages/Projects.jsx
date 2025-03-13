import Layout from "../Components/Layout";
import { TechTags } from "../Components/TechTags/TechTags";

const ProjectList = [
  {
    title: "MadSocial",
    description:
      " A social media application built using Django and Bootstap5. Users can login and register, update their data, user can create,read,update,delete posts, user cannot update or delete the post of another user",
    stack: [
      { name: "Django", color: "green" },
      { name: "Jinja", color: "red" },
      { name: "Bootstrap5", color: "purple" },
    ],
    link: "https://github.com/AbhinavShaw09/madSocial",
  },
  {
    title: "StockPulse",
    description:
      " An inventory management system built using Django and Django Rest Framework (DRF). Tested all the endpoints using Postman.",
    stack: [
      { name: "Django", color: "green" },
      { name: "DRF", color: "rose" },
      { name: "Docker", color: "blue" },
      { name: "Postgres", color: "cyan" },
    ],
    link: "https://github.com/AbhinavShaw09/StockPulse",
  },
  {
    title: "Tip-Prdiction",
    description:
      "A Tip-prediction website where a user can enter the required data to predict the tip that needs to be given ",
    stack: [
      { name: "Django", color: "green" },
      { name: "Sklearn", color: "slate" },
    ],
    link: "https://github.com/AbhinavShaw09/Tip-Prediction",
  },
  {
    title: "ChessJs",
    description: "A Simple 2-D chess Game for 2 players",
    stack: [
      { name: "Html", color: "zinc" },
      { name: "Css", color: "pink" },
      { name: "Javascript", color: "orange" },
    ],
    link: "https://github.com/AbhinavShaw09/ChessJS",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="lg:p-5 flex items-center justify-center flex-col">
        {ProjectList.map((project, index) => (
          <div
            key={index}
            className=" p-5 text-lg mb-6 w-11/12 lg:w-5/12 leading-loose font-medium border-4 border-yellow-300 rounded-3xl  transition hover:scale-95 duration-500"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h1 className="text-md font-semibold text-yellow-300">
                {project.title}
              </h1>
              <p className="text-sm">{project.description}</p>
              <TechTags tags={project.stack} />
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
