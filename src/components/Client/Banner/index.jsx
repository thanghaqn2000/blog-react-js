import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner_img from "../../../assets/images/banner-item-01.jpg";

const Banner = () => {
  const banners = [
    {
      image: banner_img,
      category: "Fashion",
      title: "Morbi dapibus condimentum",
      date: "May 12, 2020",
      comments: 12,
    },
    {
      image:banner_img,
      category: "Nature",
      title: "Donec porttitor augue at velit",
      date: "May 14, 2020",
      comments: 24,
    },
    {
      image: banner_img,
      category: "Nature",
      title: "Donec porttitor augue at velit",
      date: "May 14, 2020",
      comments: 24,
    }
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
                <NavLink to="/">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-60 object-cover"
                  />
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
