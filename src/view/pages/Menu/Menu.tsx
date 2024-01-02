import {Component} from "react";
import {menu} from "../../../assets/data/data";

import menlistu from "../../../assets/images/menlistu.jpg";


export class Menu extends Component {
    render() {
        return (
            <section
                className=" w-full mt-12 bg-cover bg-center"
                style={{backgroundImage: `url(${menlistu})`}}
            >
                <div className="flex flex-1  mb-1 justify-start items-center flex-col gap-5">
                    <h5 className="font-bold mt-9 text-white text-4xl">Menu</h5>
                    <p className="text-xl uppercase  font-serif text-amber-950 font-light">Choose your favorite</p>
                </div>
                <div className="grid grid-cols-2 mt-1 gap-2 ">
                    {menu.map(({img, title, description, price}, index) => {
                        return (
                            <div key={index}
                                 className="flex ml-6 w-[700px] bg-black bg-opacity-50 mt-3.5 p-[0.5rem] gap-[0.75rem]
">
                                <div
                                    className="  border-2 mb-[-1] border-dashed border-greenyellow p-3 w-28 h-28 rounded-full mr-4">
                                    <img src={img} alt={title} className="w-full h-full object-cover rounded-full"/>
                                </div>
                                <div className=" items-center  flex justify-between gap-[0.75rem] text-white ">
                                    <h3 className=" text-xl text-lime-200 font-semibold">{title}</h3>
                                    <p className="menu__description text-sm">{description}</p>
                                    <span className="menu__price text-lg font-bold">RS: {price}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>


            </section>

        );


    }
}
