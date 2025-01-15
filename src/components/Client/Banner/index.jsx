import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner_img from "../../../assets/images/banner-item-01.jpg";

const Banner = () => {
  const banners = [
    {
      image: "assets/images/banner-item-01.jpg",
      category: "Fashion",
      title: "Morbi dapibus condimentum",
      date: "May 12, 2020",
      comments: 12,
    },
    {
      image: "assets/images/banner-item-02.jpg",
      category: "Nature",
      title: "Donec porttitor augue at velit",
      date: "May 14, 2020",
      comments: 24,
    },
    {
      image: "assets/images/banner-item-02.jpg",
      category: "Nature",
      title: "Donec porttitor augue at velit",
      date: "May 14, 2020",
      comments: 24,
    },
    {
      image: "assets/images/banner-item-02.jpg",
      category: "Nature",
      title: "Donec porttitor augue at velit",
      date: "May 14, 2020",
      comments: 24,
    },
    {
      image: "assets/images/banner-item-02.jpg",
      category: "Nature",
      title: "Donec porttitor augue at velit",
      date: "May 14, 2020",
      comments: 24,
    },
    {
      image: "assets/images/banner-item-02.jpg",
      category: "Nature",
      title: "Donec porttitor augue at velit",
      date: "May 14, 2020",
      comments: 24,
    },
    {
      image: "assets/images/banner-item-02.jpg",
      category: "Nature",
      title: "Donec porttitor augue at velit",
      date: "May 14, 2020",
      comments: 24,
    },
    {
      image: "assets/images/banner-item-02.jpg",
      category: "Nature",
      title: "Donec porttitor augue at velit",
      date: "May 14, 2020",
      comments: 24,
    },
  ];

  return (
    <div className="main-banner bg-gray-100 py-8">
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={banner_img}
                  alt={banner.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <div className="text-sm text-white mb-2">
                    <span className="bg-blue-500 px-2 py-1 rounded">
                      {banner.category}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-xl font-bold text-white hover:text-yellow-400"
                  >
                    {banner.title}
                  </a>
                  <ul className="flex gap-4 text-sm text-gray-300 mt-2">
                    <li>
                      <a href="#">Admin</a>
                    </li>
                    <li>{banner.date}</li>
                    <li>{banner.comments} Comments</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
