import { Link } from "react-router-dom";

const navList = [
  {
    link_name: "🏠Home",
    link: "/",
  },
  {
    link_name: "🔨Projects",
    link: "/projects",
  },
  {
    link_name: "🧑‍💼Experience",
    link: "/experience",
  },
];

const Navbar = () => {
  return (
    <header className="m-4">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center text-center">
          <div className="md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 lg:text-lg md:text-md sm:text-sm font-bold">
                {navList.map((item, index) => (
                  <li key={index}>
                    <Link
                      className={
                        "text-white transition hover:text-purple-400/75"
                      }
                      to={item.link}
                    >
                      {" "}
                      {item.link_name}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
