import Layout from "../Components/Layout";

const ExperienceList = [
  
  {
    name: "Nirmata",
    description:
      "Worked as a Automation Engineer where I created the automation framework from scratch using playwright and jenkins for CI, Automated 70% of the manual test cases.",
    stack: "Playwright, Jenkins, Typescript, Docker, kubernetes",
    role:"QA Automation Intern",
    date: "Jul 2024 - Oct 2024 ",
  },
  {
    name: "Ulai",
    description:
      " Backend development for Prizi using django and drf, performing data analysis on the customer data to give insights, working on the rule engine for dynamic discount system for Prizi, Created dashboard for Prizi using react and mui, created the landing page for ulai. Managing the social media page for Ulai.",
    stack: "Statistics, Django, Scikit-Learn, React.js, Machine Learning",
    role:"Software Engineer Intern",
    date:"Nov 2023 - Jan 2023",
  },
  {
    name: "Octowit.ai",
    description:
      "Worked as a backend engineer where I was involved in writing api for the backend using drf and django, worked on gcp and azure services for different features ,used docker for containerisation, also worked on the backend for the prototype of namaskar.ai ",
    stack: "Postman API, RabbitMQ, Celery, Django, Django REST Framework",
    role:"Software Engineer Intern",
    date: "Aug 2023 - Oct 2023 ",
  },
];

const Experience = () => {
  return (
    <Layout>
      <div className="lg:p-5 flex items-center justify-center flex-col">
        <h1 className="text-3xl mb-4 font-bold">Experience</h1>
        {ExperienceList.map((experience, index) => (
          <div
            key={index}
            className=" p-5 text-lg mb-6 w-11/12 lg:w-5/12 leading-loose font-medium border-2 border-purple-500 rounded-lg"
          >
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-md underline">{experience.name}</h1>
              <span className="text-sm">{experience.date}</span>
            </div>
            <h1 className="text-md">{experience.role}</h1>
            <p className="text-sm">{experience.description}</p>

            <li className="text-sm mt-1">{experience.stack}</li>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Experience;
