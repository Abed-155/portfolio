import img from "../../assets/logo.jpg";
import Title from "../utility/Title";

const data = [
  {
    id: "111",
    title: "Name: Abed Ali Babu",
  },
  {
    id: "112",
    title: "Email: mdabedali15@gamil.com",
  },
  {
    id: "113",
    title: "Phone: 01966 430 147",
  },
  {
    id: "114",
    title: "DOB: 25/05/1997",
  },
  {
    id: "115",
    title: "Current Age: 26",
  },
];

export default function Personal() {
  return (
    <>
      <Title title="Personal Info" />
      <div className="flex justify-between md:justify-start gap-2">
        <div>
          <img className="w-32" src={img} alt="abed" />
        </div>
        <div className="flex flex-col gap-2">
          {data.map((item) => (
            <p className="border px-1" key={item.id}>
              {item.title}
            </p>
          ))}
        </div>
      </div>
      <div>
        <p className="text-justify text-slate-500 mt-2">
          I am a self-taught front-end web developer. I build and develope front
          end of a website. I have a lot of confident to learn something new. I
          am a React specialist. If you want to hire me please, contact me via
          email.
        </p>
      </div>
    </>
  );
}
