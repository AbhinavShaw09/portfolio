import Layout from "../Components/Layout";
import MyPhoto from "../assets/photo.jpeg";
import { FlipWords } from "../ui/Flipwords";
import { TechTags } from "../Components/TechTags/TechTags";

const Home = () => {
  const words = ["EAT", "SLEEP", "CODE", "REPEAT"];
  const TechStackTags = [
    { name: "React", color: "indigo" },
    { name: "Django", color: "green" },
    { name: "DRF", color: "rose" },
    { name: "Python", color: "lime" },
    { name: "Tailwind CSS", color: "sky" },
    { name: "Express JS", color: "amber" },
    { name: "Docker", color: "blue" },
    { name: "Kubernetes", color: "teal" },
    { name: "Typescript", color: "orange" },
  ];
  return (
    <>
      <Layout>
        <div className="lg:p-5 flex items-center justify-center flex-col ">
          <div className=" p-5 text-lg mb-6 w-11/12 lg:w-5/12  leading-loose font-medium border-4 border-yellow-300 rounded-3xl">
            <img
              src={MyPhoto}
              alt=""
              className="h-32 w-32  rounded-full m-auto border-yellow-500 border-4"
            />
            <h1 className="text-xl text-yellow-300 font-bold">About Me 🧑</h1>
            <p className="text-md md:text-xl mt-1">
              Hi 👋 , I am Abhinav Shaw, I am a Software Engineer with 1 Year Of
              Experience, I love Learning new stuff and building projects. I am
              currently working as a Backend Engineer at Dukaan®.
            </p>
            <h1 className="text-xl text-yellow-300 font-bold mt-4">
              Tech Stack 💻
            </h1>

            <TechTags tags={TechStackTags} />

            <div className="flex text-3xl items-center font-bold mt-4 justify-center">
              <FlipWords words={words} /> <br />
            </div>

            <div className="flex justify-start items-center flex-wrap">
              <a
                className="inline-block rounded-3xl mx-2 bg-indigo-600 px-2 py-2 text-sm font-bold text-white transition  hover:scale-110 focus:outline-none focus:ring active:bg-indigo-400 mt-5 duration-500"
                href="https://drive.google.com/file/d/1QNGZvBr68Oyi_mspPiNzd8AeLEAJyFID/view?usp=drive_links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                className="inline-block rounded-3xl  mx-2 bg-blue-500 px-2 py-2 text-sm font-bold text-white transition  hover:scale-110 focus:outline-none focus:ring active:bg-blue-400 mt-5 duration-500"
                href="https://www.linkedin.com/in/abhinav-shaw-888895236/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkdin
              </a>
              <a
                className="inline-block rounded-3xl mx-2 bg-gray-700 px-2 py-2  text-sm font-bold text-white transition  hover:scale-110 focus:outline-none focus:ring active:bg-blue-400 mt-5 duration-500"
                href="https://github.com/AbhinavShaw09"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
