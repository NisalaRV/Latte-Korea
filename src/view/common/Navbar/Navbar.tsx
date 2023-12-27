import {Component} from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex justify-between">

                <Link to="/">
                    <div className="flex">
                        <h1 className="text-1xl text-secondary">
                          LATTE KOREA</h1>

                    </div>
                </Link>

                <ul className="list-none flex mt-1">
                    <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                        <Link to="/contact">About</Link>
                    </li>
                    <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                        <Link to="/about">Contact</Link>
                    </li>
                </ul>

                <button className="text-[8px] text-[#e6f0e6]
                                   bg-green-400 pl-3 pr-3
                                   hover:text-tertiary">
                    <Link to="/login">Sign In</Link>
                </button>
            </div>
        );
    }
}