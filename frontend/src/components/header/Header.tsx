import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);
  return (
    <>
      <div className="fixed top-0 h-[8vh] z-50 w-full shadow-xl">
        <div className="container mx-auto flex items-center justify-between mt-4 ">
          <div className="p-2">
            <h1 className="font-dancing">
              <span className="text-[24px] ">Dev.</span>
              Invest
            </h1>
          </div>
          <div
            onClick={() => setActive(!active)}
            className={`hamburger ${active && "active"}`}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
      {active && <MobileMenu setActive={setActive} />}
    </>
  );
};

export default Header;
