"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
type ServicesProps = {
  service: {
    id: number;
    title: string;
    icon: string;
    description: string;
  };
};
function ServicesItem({ service }: ServicesProps) {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay={`${service.id * 150}`}
      data-aos-anchor-placement="top-center"
    >
      <Tilt className="shadow-2xl p-6 rounded-lg bg-[#814ced]">
        <Image
          src={service.icon}
          alt={service.title}
          width={50}
          height={50}
          className=""
        />
        <h1 className="mt-4 text-lg font-bold text-gray-100">
          {service.title}
        </h1>
        <p className="mt-3 text-sm text-white text-opacity-80">
          {service.description}
        </p>
      </Tilt>
    </div>
  );
}

export default ServicesItem;
