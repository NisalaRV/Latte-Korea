import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <section className="w-screen h-32 mt-12 ">
                <div className="flex flex-1 justify-start items-center flex-col gap-5">
                    <h5 className="font-bold mt-9  text-4xl">Contact Us</h5>
                    <p className="text-xl uppercase font-light">Plase fill in the form below</p>
                </div>
                <form className="py-4 mt-4  w-[500px] ml-[500px] flex flex-col gap-5">
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
