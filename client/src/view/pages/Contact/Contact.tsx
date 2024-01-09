import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <section className="relative w-full h-screen flex justify-center items-center ">
                <div className="absolute left-[600px] mb-[400px] flex flex-col justify-center items-center p-6 ">
                    <h5 className="font-bold mt-9  text-4xl mb-3">Contact Us</h5>
                    <p className="text-xl uppercase font-light mb-6">Plase fill in the form below</p>
                </div>
                <form className="py-4 mt-[150px] justify-center w-[500px] flex flex-col gap-5">
                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="email" placeholder="john de sliva"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="john@gmail.com"/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>

                    <textarea className="h-32"
                              id="message"
                              placeholder="Type your message here....."></textarea>
                </div>

                <button className="bg-green-700 p-3 text-white font-bold" type="submit">Send</button>

                </form>
            </section>

        );


    }
}
