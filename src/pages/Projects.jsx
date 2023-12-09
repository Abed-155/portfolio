import Layout from "../components/Layout";
import Title from "../components/utility/Title";
import { FaGithub } from "react-icons/fa";

const data = [
  {
    id: "111",
    name: "Color App",
    pic: "project_1",
    desc: "I build this project using HTML, CSS and JS",
    github: "https://github.com/Abed-155/colors-app",
    live: "https://abed-155.github.io/colors-app/",
  },
  {
    id: "112",
    name: "Digital Clock",
    pic: "",
    desc: "I build this project using HTML, CSS and JS",
    github: "Abed-155/digital-clock",
    live: "#",
  },
  {
    id: "113",
    name: "Calculator",
    pic: "",
    desc: "I build this project using HTML, CSS and JS",
    github: "https://github.com/Abed-155/js-calculator",
    live: "#",
  },
];

export default function Projects() {
  return (
    <Layout>
      <Title title="My projects" />
      <div className="flex flex-col md:flex-row gap-4">
        {data.map((item) => (
          <div
            className="flex flex-col p-2 rounded border min-w-[300px]"
            key={item.id}
          >
            <img src={item.pic} alt="project_pic" />
            <h2 className="text-lg font-semibold text-slate-800">
              {item.name}
            </h2>
            <p className="text-slate-500">{item.desc}</p>
            <div className="flex justify-between items-center mt-4">
              <a
                className="text-cyan-500 text-lg border p-1"
                href={item.github}
              >
                <FaGithub />
              </a>
              <a className="border rounded px-2" href={item.live}>
                live preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
