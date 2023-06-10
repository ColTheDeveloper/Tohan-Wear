import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "./Carousel.css"



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import image1 from "../../images/image2.avif"
import image2 from "../../images/image3.avif"
import image3 from "../../images/image4.avif"

const Carousel=()=>{
    return(
        <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link><img className="imageSlide" src={image1} alt="slide" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link><img className="imageSlide" src={image2} alt="slide" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link><img className="imageSlide" src={image3} alt="slide" /></Link>
                </SwiperSlide>
                
        
            </Swiper>

    )
}
export default Carousel;