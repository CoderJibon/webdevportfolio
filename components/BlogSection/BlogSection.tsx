import { blogs } from "@/Data/data";
import SectionHeading from "../Helper/SectionHeading";
import Image from "next/image";

function BlogSection() {
  return (
    <div>
      <div className="pt-16 pb-16 bg-[#0f0715]">
        <SectionHeading>Our Blog</SectionHeading>
        <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">
          {blogs.map((blog, i) => (
            <div
              key={blog.id}
              data-aos="zoom in"
              data-aos-delay={i * 100}
              data-aos-anchor-placement="top-center"
            >
              <div className="bg-indigo-950 rounded-md overflow-hidden">
                <Image
                  src={blog.image}
                  width={300}
                  height={300}
                  alt={blog.title}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6">
                  <p className="rounded-sm px-6 py-1.5 bg-rose-500 text-white w-fit">
                    News
                  </p>
                  <h1 className="sm:text-lg text-base cursor-pointer hover:text-gray-100 hover:underline transition-all duration-200 mt-6 mb-2 text-gray-200 leading-[1.6rem] font-bold">
                    {blog.title}
                  </h1>
                  <p className="text-sm font-semibold text-opacity-70 text-gray-400">
                    {blog.summary}
                  </p>
                  <div className="mt-4 mb-4 w-full h-[1.5px] bg-gray-400 opacity-45"></div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-sm text-gray-300 font-bold">
                      {blog.date}
                    </h1>
                    <button className="text-base hover:text-rose-500 text-gray-200 underline font-bold">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
