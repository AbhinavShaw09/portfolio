import Layout from "../Components/Layout";
import MyPhoto from "../assets/1704811977663.jpeg";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="lg:p-5 flex items-center justify-center flex-col">
          <div className=" p-5 text-lg mb-6 w-11/12 lg:w-5/12 leading-loose font-medium border-2 border-purple-500 rounded-lg">
            <img
              src={MyPhoto}
              alt=""
              className="h-32 w-32  rounded-lg m-auto border-purple-500 border-2"
            />
            <h1 className="text-xl  font-bold">About Me🧑</h1>
            <p className="text-sm mt-1">
              Hi👋, I am Abhinav Shaw, I am an AI Engineer, I love Learning new
              stuff and building projects. I also like creating websites,
              currently learning Typescript.
            </p>
            <h1 className="text-xl font-bold mt-4">Tech Stack💻</h1>

            <p className="text-sm mt-1">
              React, Django, Django Rest Framework, Tailwind CSS, Python, Scikit
              Learn, Docker, Node JS, MUI, Chakra UI
            </p>
            <div className="flex justify-start align-center space-x-5">
              <a
                className="inline-block rounded bg-indigo-600 px-6 sm:px-4 py-2 text-sm font-medium text-white transition  hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 mt-5 duration-500"
                href="https://drive.google.com/file/d/167uKlzMqBB3X7AkCnsEk60oaWfs7-CNG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                className="inline-block rounded bg-blue-500 px-6 py-2 sm:px-4 text-sm font-medium text-white transition  hover:scale-110 focus:outline-none focus:ring active:bg-blue-400 mt-5 duration-500"
                href="https://www.linkedin.com/in/abhinav-shaw-888895236/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkdin
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
