import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import img from "../assets/abed.png";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="md:flex md:flex-row md:justify-evenly md:mt-4 md:gap-4 md:items-center">
          <div className="flex justify-center items-center">
            <img
              className="w-60 md:w-80 rounded border my-4"
              src={img}
              alt="abed"
            />
          </div>
          <div>
            <h1 className="text-lg md:text-6xl font-medium text-slate-600 mb-2">
              Hi! I'm Abed <br /> Front end developer
            </h1>
            <p className="text-slate-500 text-lg mb-4">
              I build and develope front-end of a website.
            </p>

            <Link
              to="/contact"
              className="bg-cyan-500 rounded py-2 px-4 cursor-pointer text-white text-lg font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
