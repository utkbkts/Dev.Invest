import { FaHome, FaProjectDiagram, FaUsers, FaComments } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
const headerMobileMenu = [
  {
    id: 1,
    title: "Ana Sayfa",
    icon: <FaHome />,
    href: "/",
  },
  {
    id: 2,
    title: "Projeler",
    icon: <FaProjectDiagram />,
    href: "/projects",
  },
  {
    id: 3,
    title: "Yatırımcılar",
    icon: <FaUsers />,
    href: "/investors",
  },
  {
    id: 4,
    title: "Tartışma",
    icon: <FaComments />,
    href: "/argument",
  },
];
type MobileMenuProps = {
  setActive: (active: boolean) => void;
};
const MobileMenu = ({ setActive }: MobileMenuProps) => {
  return (
    <div className="fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center text-white">
      {/* Menü Başlığı */}
      <div className="text-4xl mb-8 font-bold">Menü</div>

      {/* Menü Öğeleri */}
      <div className="flex flex-col gap-8 text-2xl">
        {headerMobileMenu.map((item) => (
          <Link
            onClick={() => setActive(false)}
            to={item.href}
            key={item.id}
            className="relative group flex items-center gap-4 cursor-pointer hover:text-blue-500 transition-all duration-300"
          >
            {/* Menü İkonu */}
            <span className="text-3xl">{item.icon}</span>
            {/* Menü Başlığı */}
            <span className="relative inline-block">
              {item.title}
              {/* Hover Efekti */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        ))}
      </div>

      {/* Alt Bar */}
      <div className="absolute bottom-8  text-lg text-gray-400 flex items-center gap-4">
        © 2024 DevInvenst{" "}
        <Link target="_blank" to={"https://github.com/utkbkts"}>
          <span className="text-3xl hover:text-blue-500 duration-300 transition-all">
            <SiGithub />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
