import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const social = [
  {
    id: "111",
    url: "https://www.facebook.com/abedalibabu97",
    icon: <FaFacebook />,
  },
  {
    id: "112",
    url: "https://www.linkedin.com/in/abed-ali-babu/",
    icon: <FaLinkedin />,
  },
  {
    id: "113",
    url: "https://www.instagram.com/abedalibabu/",
    icon: <FaInstagram />,
  },
  {
    id: "114",
    url: "https://twitter.com/AbedBravo",
    icon: <FaTwitter />,
  },
];

export default function Social() {
  return (
    <ul className="flex items-center gap-4 justify-center">
      {social.map((item) => (
        <li key={item.id}>
          <a className="text-lg text-cyan-500" target="blank" href={item.url}>
            {item.icon}
          </a>
        </li>
      ))}
      <li>
        <a
          className="text-lg text-cyan-500"
          href="mailto:mdabedali15@gmail.com"
        >
          <FaEnvelope />
        </a>
      </li>
    </ul>
  );
}
