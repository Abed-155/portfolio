import Title from "../utility/Title";

const skills = [
  {
    id: "111",
    title: "HTML",
    progress: "80%",
    bg: "w-4/5 bg-cyan-500",
  },
  {
    id: "112",
    title: "CSS",
    progress: "60%",
    bg: "w-3/5 bg-cyan-500",
  },
  {
    id: "113",
    title: "JavaScript",
    progress: "50%",
    bg: "w-3/6 bg-cyan-500",
  },
  {
    id: "114",
    title: "React",
    progress: "80%",
    bg: "w-4/5 bg-cyan-500",
  },
  {
    id: "115",
    title: "Tailwind",
    progress: "80%",
    bg: "w-4/5 bg-cyan-500",
  },
];

export default function Skills() {
  return (
    <>
      <Title title="Skills" />
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <span className="text-slate-900">{skill.title}</span>
            <p className="border text-center mb-2">
              <p className={skill.bg}>{skill.progress}</p>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
