import Layout from "../Components/Layout";
import { TechTags } from "../Components/TechTags/TechTags";

const ExperienceList = [
  {
    name: "Dukaan®",
    description:
      "Working as Backend Engineer, Integrated Paytm gateway services for users to recieve the tractions from DukaanPay, added the blacklisting fraud users feature for the super admin, adding new features and maintaining the codebase.",
    stack: [
      { name: "Django", color: "green" },
      { name: "DRF", color: "rose" },
      { name: "Postgres", color: "cyan" },
      { name: "Docker", color: "blue" },
      { name: "Kubernetes", color: "teal" },
    ],
    role: "Backend Engineer",
    date: "Oct 2024 - Present",
  },
  {
    name: "Nirmata",
    description:
      "Worked as a Automation Engineer where I created the automation framework from scratch using playwright and jenkins for CI, Automated 70% of the manual test cases. Reduced the total duration of automation pipeline from 4 hours down to 1 hour.",
    stack: [
      { name: "Playwright", color: "purple" },
      { name: "Jenkins", color: "red" },
      { name: "Typescript", color: "orange" },
      { name: "Docker", color: "blue" },
      { name: "Kubernetes", color: "teal" },
    ],
    role: "QA Automation Intern",
    date: "Jul 2024 - Oct 2024 ",
  },
  {
    name: "Ulai",
    description:
      " Backend development for Prizi using django and drf, performing data analysis on the customer data to give insights, working on the rule engine for dynamic discount system for Prizi, Created dashboard for Prizi using react and mui, created the landing page for ulai. Managing the social media page for Ulai.",
    stack: [
      { name: "Django", color: "green" },
      { name: "Sklearn", color: "slate" },
      { name: "DRF", color: "rose" },
      { name: "React", color: "indigo" },
    ],
    role: "Software Engineer Intern",
    date: "Nov 2023 - Jan 2023",
  },
  {
    name: "Octowit.ai",
    description:
      "Worked as a backend engineer where I was involved in writing api for the backend using drf and django, worked on gcp and azure services for different features ,used docker for containerisation, also worked on the backend for the prototype of NamaskarAI.",
    stack: [
      { name: "Django", color: "green" },
      { name: "DRF", color: "rose" },
      { name: "Postgres", color: "cyan" },
    ],
    role: "Software Engineer Intern",
    date: "Aug 2023 - Oct 2023 ",
  },
];

const Experience = () => {
  return (
    <Layout>
      <div className="lg:p-5 flex items-center justify-center flex-col">
        {ExperienceList.map((experience, index) => (
          <div
            key={index}
            className=" p-5 text-lg mb-6 w-11/12 lg:w-5/12 leading-loose font-medium border-4 border-yellow-300 rounded-3xl"
          >
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-md font-bold text-yellow-300">
                {experience.name}
              </h1>
              <span className="text-sm">{experience.date}</span>
            </div>
            <h1 className="text-base font-semibold text-yellow-300">
              {experience.role}
            </h1>
            <p className="text-sm">{experience.description}</p>
            <TechTags tags={experience.stack} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Experience;
