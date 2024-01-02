import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Menu} from "../../pages/Menu/Menu";
import {Contact} from "../../pages/Contact/Contact";
import ReservationForm from "../../pages/Booking/ReservationForm";

export class MainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/menu" Component={Menu}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/booking" Component={ReservationForm}></Route>

                </Routes>
            </div>
        );
    }
}
