'use client'

import { register } from "swiper/element";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination, Navigation  } from 'swiper/modules';
import Image from "next/image";

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';

import Img1 from "@/assets/images/IMG-20240315-WA0004.jpg"
import Img2 from "@/assets/images/IMG-20240315-WA0006.jpg"
import Img3 from "@/assets/images/IMG-20240315-WA0007.jpg"
import Img4 from "@/assets/images/IMG-20240315-WA0008.jpg"
import Img5 from "@/assets/images/IMG-20240315-WA0009.jpg"
import Img6 from "@/assets/images/IMG-20240315-WA0010.jpg"
import Img7 from "@/assets/images/IMG-20240315-WA0011.jpg"
import Img8 from "@/assets/images/IMG-20240315-WA0012.jpg"
import Img9 from "@/assets/images/IMG-20240315-WA0013.jpg"
import Img10 from "@/assets/images/IMG-20240315-WA0014.jpg"


import { Container } from "./Container";

export function SectionImgs(){
    return(
    <section className="relative w-full h-[790px] ">
        <Container>
            <div className=" flex-1 max-w-[594px] pt-32 ">
                <Swiper 
                    slidesPerView={1}
                    navigation
                    effect={'cards'}
                    modules={[EffectCards, Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    }}
                     className=" h-[500px] w-[700px]"
                >
                    <SwiperSlide key={1}>
                        <Image 
                            src={Img1}
                            alt=""
                            className=" rounded-md w-[700px] h-[900px] object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide key={2}>
                    <Image 
                            src={Img2}
                            alt=""
                            className=" rounded-md w-[700px] h-[500px] object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide key={3}>
                    <Image 
                            src={Img3}
                            alt=""
                            className="  rounded-md w-[700px] h-[500px] object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide key={4}>
                    <Image 
                            src={Img4}
                            alt=""
                            className=" rounded-md w-[700px] h-[500px] object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide key={5}>
                    <Image 
                            src={Img5}
                            alt=""
                            className=" rounded-md w-[700px] h-[500px] object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide key={6}>
                    <Image 
                            src={Img6}
                            alt=""
                            className=" rounded-md w-[700px] h-[500px] object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide key={7}>
                    <Image 
                            src={Img7}
                            alt=""
                            className=" rounded-md w-[700px] h-[500px] object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide key={8}>
                    <Image 
                            src={Img8}
                            alt=""
                            className=" rounded-md w-[700px] h-[500px] object-cover"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container>
        <div className=" absolute top-0 right-10 flex items-center w-[32%] h-full">
                    <h2 className=" text-primary-gray text-[56px] font-bold leading-tight mb-6">Muito além de uma consulta, uma experiência.</h2>      
        </div>
    </section>
    )
}