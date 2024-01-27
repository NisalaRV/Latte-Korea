import {Component} from "react";
import {Link} from "react-router-dom";
import logo from '../../../assets/logolatte.jpg'
export class Navbar extends Component {
    render() {
        return (
            <div
                className="p-2 flex bg-[#00171a] justify-between fixed top-0 left-0 z-50 w-screen h-[10vh] md:shadow-md shadow-sm ">

                <Link to="/">
                    <div className="flex">
                        <img className="h-10 w-10  pt-1" src={logo}
                             alt=""/>
                        <h1 className="text-1xl mt-1 text-white p-2">
                            LATTE KOREA</h1>


                    </div>
                </Link>

                <ul className="list-none flex mt-3 gap-2 ">
                    <li className="mr-2 text-[15px] text-white hover:text-green-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2 text-[15px] text-white hover:text-green-400">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mr-2 text-[15px] text-white hover:text-green-400">
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li className="mr-2 text-[15px] text-white hover:text-green-400">
                        <Link to="/booking">Booking</Link>
                    </li>
                    <li className="mr-2 text-[15px] text-white hover:text-green-400">
                        <Link to="/contact">Contact</Link>
                    </li>
                    {/*<li className="mr-2 text-[15px] text-white hover:text-green-400">*/}
                    {/*    <Link to="/register">Register</Link>*/}
                    {/*</li>*/}

                </ul>


                <button className="text-[16px] text-[#e6f0e6]
                                   bg-green-400 pl-3 pr-3
                                   hover:text-tertiary rounded-[7px] mx-3 px-6 py-1.5">
                    <Link to="/login">Sign In</Link>
                </button>
            </div>

        );

    }
}
