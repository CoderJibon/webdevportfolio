import { navLinks } from "@/constant/constant";
import Link from "next/link.js";
import { CgClose } from "react-icons/cg";
//define props type
type Props = {
  showNav: boolean;
  closeNav: () => void;
};
function MobileNav({ showNav, closeNav }: Props) {
  const navOpen: string = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black bg-opacity-50 w-full h-screen`}
    >
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10006] `}
      >
        {navLinks.map((navLink) => (
          <Link href={navLink.url} key={navLink.id}>
            <p className="link_item text-[20px] ml-12 border-b-[1.5px] pb-2 border-white w-fit sm:text-[30px] ">
              {navLink.label}
            </p>
          </Link>
        ))}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer "
        />
      </div>
    </div>
  );
}

export default MobileNav;
