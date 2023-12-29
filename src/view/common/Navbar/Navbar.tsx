import {Component} from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div
                className="p-2 flex justify-between fixed top-0 left-0 z-50 w-screen h-[8vh] md:shadow-md shadow-sm bg-white">

                <Link to="/">
                    <div className="flex">
                        <h1 className="text-1xl text-secondary">
                            LATTE KOREA</h1>

                    </div>
                </Link>

                <ul className="list-none flex mt-1">
                    <li className="mr-2 text-[15px] text-secondary hover:text-green-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2 text-[15px] text-secondary hover:text-green-400">
                        <Link to="/contact">About</Link>
                    </li>
                    <li className="mr-2 text-[15px] text-secondary hover:text-green-400">
                        <Link to="/about">Contact</Link>
                    </li>
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
