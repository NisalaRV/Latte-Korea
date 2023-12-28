import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { hero1 } from "../../../assets/data/data";

interface ArrowProps {
    onClick: () => void;
}

function SampleNextArrow(props: ArrowProps) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute top-[50%] left-0 text-white cursor-pointer"
        >
            <MdKeyboardArrowLeft size={50} />
        </div>
    );
}

function SamplePrevArrow(props: ArrowProps) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute top-[50%] right-0 z-10 text-white cursor-pointer"
        >
            <MdKeyboardArrowRight size={50} />
        </div>
    );
}

export const Home: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow onClick={() => {}} />,
        prevArrow: <SamplePrevArrow onClick={() => {}} />,
    };

    return (
        <section className="hero">
            <div className="w-full h-auto md:h-[92vh] md:flex md:justify-between ">
                <div className="w-full h-full ">
                    <Slider {...settings}>
                        {hero1.map((item, index) => (
                            <div key={index} className="box relative h-[92vh] sm:mt-16 w-full">
                                <img
                                    src={item.cover}
                                    alt={`cover-${index}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="text absolute top-0 left-0 text-white p-5">
                                    {/* Your additional content here */}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};
