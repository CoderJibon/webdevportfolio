"use client";
import Image from "next/image";
import SectionHeading from "../Helper/SectionHeading";
import Carousel from "react-multi-carousel";
import { clientReviews } from "@/Data/data";
import { FaStar } from "react-icons/fa6";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function ReviewsSection() {
  return (
    <div>
      <div className="pt-16 pb-16 bg-[#050709]">
        <SectionHeading>Client Reviews</SectionHeading>
        <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
          <Carousel
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite
            responsive={responsive}
          >
            {clientReviews.map((review) => (
              <div
                key={review.image}
                data-aos="fade-left"
                data-aos-delay={100}
                data-aos-anchor-placement="top-center"
              >
                <div className="rounded-md overflow-hidden bg-[#140c1c] m-4">
                  <div className="p-6">
                    <Image
                      src={"/images/q.png"}
                      width={50}
                      height={50}
                      alt={""}
                    />
                    <p className="text-white text-opacity-70">
                      {review.review}
                    </p>
                    <Image
                      src={"/images/q.png"}
                      width={50}
                      height={50}
                      alt={""}
                      className="ml-auto"
                    />
                  </div>
                  <div className="px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold">
                    <span>{review.rating}/5</span>
                    <FaStar className="text-yellow-500" />
                  </div>
                  <div className="bg-gray-100">
                    <div className="p-6 flex items-center space-x-6">
                      <div>
                        <Image
                          src={review.image}
                          width={40}
                          height={40}
                          alt={review.name}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h1 className="text-lg font-bold ">{review.name}</h1>
                        <p className="text-base text-gray-700">
                          {review.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ReviewsSection;
