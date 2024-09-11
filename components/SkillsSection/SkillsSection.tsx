import { skillsData } from "@/Data/data";
import SectionHeading from "../Helper/SectionHeading";
import Image from "next/image";

function SkillsSection() {
  return (
    <div>
      <div className="pt-16 pb-16 bg-[#0f0715]">
        <SectionHeading> My Skills</SectionHeading>

        <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
          {skillsData.map((sk) => (
            <div
              key={sk.id}
              data-aos="fade-left"
              data-aos-delay={sk.id * 50}
              data-aos-anchor-placement="top-center"
            >
              <div className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
                <Image
                  src={sk.image}
                  alt={sk.title}
                  width={80}
                  height={80}
                  className=" object-cover mx-auto "
                />
                <h1 className="text-[18px] mt-4 text-white font-[600] ">
                  {sk.title}
                </h1>
                <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-40">
                  {sk.percent}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
