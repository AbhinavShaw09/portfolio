import Layout from "../Components/Layout";

const ProjectList = [
  {
    title: "MadSocial",
    description:
      " A social media application built using Django and Bootstap5. Users can login and register, update their data, user can create,read,update,delete posts, user cannot update or delete the post of another user",
    stack: "Django, Jinja template, Bootstrap5",
    link: "https://github.com/AbhinavShaw09/madSocial",
  },
  {
    title: "StockPulse",
    description:
      " An inventory management system built using Django and Django Rest Framework (DRF). Tested all the endpoints using Postman.",
    stack: "Django, DRF, Docker, PostgreSQL",
    link: "https://github.com/AbhinavShaw09/StockPulse",
  },
  {
    title: "Tip-Prdiction",
    description:
      "A Tip-prediction website where a user can enter the required data to predict the tip that needs to be given ",
    stack: "Django, Scikit-Learn",
    link: "https://github.com/AbhinavShaw09/Tip-Prediction",
  },
  {
    title: "ChessJs",
    description: "A Simple 2-D chess Game for 2 players",
    stack: "Html, Css, Javascript",
    link: "https://github.com/AbhinavShaw09/ChessJS",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="lg:p-5 flex items-center justify-center flex-col">
        <h1 className="text-3xl mb-4 font-bold">Projects</h1>
        {ProjectList.map((project, index) => (
          <div
            key={index}
            className=" p-5 text-lg mb-6 w-11/12 lg:w-5/12 leading-loose font-medium border-2 border-purple-500 rounded-lg  transition hover:scale-95 duration-500"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h1 className="text-md underline">{project.title}</h1>
              <p className="text-sm">{project.description}</p>
            </a>
            <li className="text-sm mt-1">{project.stack}</li>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
