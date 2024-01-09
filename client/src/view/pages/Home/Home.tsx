import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { hero1 } from "../../../assets/data/data";

interface ArrowProps {
    onClick: () => void;
}

class SampleNextArrow extends Component<ArrowProps> {
    render() {
        const { onClick } = this.props;
        return (
            <div
                onClick={onClick}
                className="absolute top-[50%] left-0 text-white cursor-pointer"
            >
                <MdKeyboardArrowLeft size={50} />
            </div>
        );
    }
}

class SamplePrevArrow extends Component<ArrowProps> {
    render() {
        const { onClick } = this.props;
        return (
            <div
                onClick={onClick}
                className="absolute top-[50%] right-0 z-10 text-white cursor-pointer"
            >
                <MdKeyboardArrowRight size={50} />
            </div>
        );
    }
}

class Home extends Component {
    render() {

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
                <div className="w-full h-full">
                    <Slider {...settings}>
                        {hero1.map((item, index) => (
                            <div key={index} className="box relative h-[97vh] sm:mt-16 w-full">
                                <img
                                    src={item.cover}
                                    alt={`cover-${index}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="text absolute top-20 text-white p-5 text-5xl ">
                                    <h1 className="ml-[49vw] m-20  font-serif">Welcome Latte Koriea</h1>
                                    <h3 className="ml-[750px] font-serif text-[30px]">FRESH & TASTY MEALS</h3>
                                    <p className="text-[22px] ml-[750px] font-thin mt-[20px]">
                                        Gathering Place For The Tastiest Foods, Coffee & Sweet, Boba Tea, Live Music.
                                    </p>
                                    <button className="text-[16px] text-[#e6f0e6] pr-6 border-[1px] ml-[750px] hover:text-tertiary rounded-[7px] mx-4 px-7 py-5 mt-[40px]">
                                        Check Menu
                                    </button>

                                    <button className="text-[16px] text-[#e6f0e6] pr-6 border-[1px] hover:text-tertiary rounded-[7px] mx-4 px-7 py-5">
                                        Book Table
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Home;
