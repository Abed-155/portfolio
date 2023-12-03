import Layout from "../components/Layout";
import HeadTitle from "../components/utility/HeadTitle";
import Social from "../components/Social";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const contact = [
  {
    id: "111",
    icon: <FaPhone />,
    name: "01966 430147",
  },
  {
    id: "112",
    icon: <FaEnvelope />,
    name: "mdabedali15@gmail.com",
  },
  {
    id: "113",
    icon: <FaLocationArrow />,
    name: "Madhabpur, Habiganj",
  },
];

export default function Contact() {
  return (
    <>
      <Layout>
        <HeadTitle label="Contact Me" />
        <div className="flex flex-col gap-4">
          <div>
            <ul className="flex flex-col gap-4">
              {contact.map((item) => (
                <li className="flex items-center gap-2" key={item.id}>
                  <span className="text-cyan-500">{item.icon}</span>
                  <span className="text-slate-500">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Social />
          </div>
        </div>
      </Layout>
    </>
  );
}
