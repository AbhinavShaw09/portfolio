import Layout from "../Components/Layout";
import MyPhoto from "../assets/1704811977663.jpeg";
import { FlipWords } from "../ui/Flipwords";

const Home = () => {
  const words = ["EAT", "SLEEP", "CODE", "REPEAT"];
  return (
    <>
      <Layout>
        <div
          className="lg:p-5 flex items-center justify-center flex-col "
        >
          <div className=" p-5 text-lg mb-6 w-11/12 lg:w-5/12  leading-loose font-medium border-2 border-purple-500 rounded-lg">
            <img
              src={MyPhoto}
              alt=""
              className="h-32 w-32  rounded-lg m-auto border-purple-500 border-2"
            />
            <h1 className="text-xl  font-bold">About Me🧑</h1>
            <p className="text-sm mt-1">
              Hi👋 , I am Abhinav Shaw, I am an Software Engineer, I love
              Learning new stuff and building projects. I am currently working
              as a Backend Engineer at Dukaan®
            </p>
            <h1 className="text-xl font-bold mt-4">Tech Stack💻</h1>

            <p className="text-sm mt-1">
              React, Django, Django Rest Framework, Tailwind CSS, Python, Scikit
              Learn, Docker, Node JS, MUI, Chakra UI
            </p>
            <div className="flex text-3xl items-center font-bold mt-4 justify-center">
              <FlipWords words={words} /> <br />
            </div>

            <div className="flex justify-start items-center flex-wrap">
              <a
                className="inline-block rounded mx-2 bg-indigo-600 px-6 sm:px-4 py-2 text-sm font-medium text-white transition  hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 mt-5 duration-500"
                href="https://drive.google.com/file/d/1QNGZvBr68Oyi_mspPiNzd8AeLEAJyFID/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                className="inline-block rounded mx-2 bg-blue-500 px-6 py-2 sm:px-4 text-sm font-medium text-white transition  hover:scale-110 focus:outline-none focus:ring active:bg-blue-400 mt-5 duration-500"
                href="https://www.linkedin.com/in/abhinav-shaw-888895236/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkdin
              </a>
              <a
                className="inline-block rounded mx-2 bg-gray-700 px-6 py-2 sm:px-4 text-sm font-medium text-white transition  hover:scale-110 focus:outline-none focus:ring active:bg-blue-400 mt-5 duration-500"
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
