import Link from "next/link";
import SectionHeading from "../Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Image from "next/image";

function ProjectSection() {
  return (
    <div>
      <div className="pt-16 pb-16 bg-[#050709]">
        <SectionHeading> My Projects</SectionHeading>
        <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {projectData.map((project, i) => (
            <div
              data-aos="fade-right"
              data-aos-delay={i * 100}
              data-aos-anchor-placement="top-center"
              key={project.id}
              className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link target="_blank" href={project.url}>
                <Image
                  src={project.image}
                  alt="project"
                  width={400}
                  height={400}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
