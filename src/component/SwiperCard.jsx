import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import cerHtml from '../assets/certificate/html.jpg'
import cerHtmlFundenmental from '../assets/certificate/html-fundenmental.jpg'
import cerCss from '../assets/certificate/css.jpg'
import cerCssIntermidate from '../assets/certificate/css-intermediate.jpg'
import cerJavaScript from '../assets/certificate/javascript.jpg'
import cerInterActiveWebsite from '../assets/certificate/Interactive-website.jpg'
import cerReact from '../assets/certificate/react.jpg'
import cerSQL from '../assets/certificate/sql.jpg'
import cerHtmlCssGitHub from '../assets/certificate/html-css-github.jpg'
import 'swiper/css';

const SwiperCard = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      <SwiperSlide><img src={cerReact} alt='certificate html'/></SwiperSlide>
      <SwiperSlide><img src={cerInterActiveWebsite} alt='certificate html'/></SwiperSlide>
      <SwiperSlide><img src={cerSQL} alt='certificate html'/></SwiperSlide>
      <SwiperSlide><img src={cerJavaScript} alt='certificate html'/></SwiperSlide>
      <SwiperSlide><img src={cerCssIntermidate} alt='certificate html'/></SwiperSlide>
      <SwiperSlide><img src={cerCss} alt='certificate html'/></SwiperSlide>
      <SwiperSlide><img src={cerHtmlCssGitHub} alt='certificate html'/></SwiperSlide>
      <SwiperSlide><img src={cerHtml} alt='certificate html'/></SwiperSlide>
      <SwiperSlide><img src={cerHtmlFundenmental} alt='certificate html'/></SwiperSlide>
    </Swiper>
  )
}

export default SwiperCard