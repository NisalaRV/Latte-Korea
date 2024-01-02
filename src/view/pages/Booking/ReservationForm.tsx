import React, { ChangeEvent } from 'react';
import booking from "../../../assets/images/booking.jpg";

interface ReservationFormData {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    phoneNumber: string;
    message: string;
}

interface ReservationFormState {
    formData: ReservationFormData;
}

class ReservationForm extends React.Component<{}, ReservationFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            formData: {
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                phoneNumber: '',
                message: '',
            },
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            },
        }));
    };

    handleTableBooking = () => {
        console.log('Table booking requested:', this.state.formData);

    };

    render() {
        return (
            <section className="relative w-screen h-screen flex justify-center items-center">
                <img src={booking} className="absolute inset-0 w-full h-full object-cover" alt="Booking Background" />
                <div className="absolute flex flex-col justify-center items-center p-6 bg-black bg-opacity-50 text-white">
                    <h5 className="font-bold text-4xl mb-3">Reservation</h5>
                    <p className="text-xl uppercase font-light mb-6">Book A Table</p>

                    <div className="flex justify-center">
                        <div className="flex-col-3 max-w-md  p-4">
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Your Name:
                                    <input
                                        className="w-full text-black p-2 border rounded "
                                        type="text"
                                        name="name"
                                        value={this.state.formData.name}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Email:
                                    <input
                                        className="w-full text-black p-2 border rounded"
                                        type="email"
                                        name="email"
                                        value={this.state.formData.email}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className=" mb-2 absolute w-[870px]">
                                    Your Message:
                                    <textarea
                                        className="w-full text-black border rounded"
                                        name="message"
                                        value={this.state.formData.message}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>

                        </div>
                        <div className="flex-col-3 max-w-md p-4">
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Date:
                                    <input
                                        className="w-full text-black p-2 border rounded"
                                        type="date"
                                        name="date"
                                        value={this.state.formData.date}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2">
                                    Time:
                                    <input
                                        className="w-full text-black p-2 border  rounded"
                                        type="time"
                                        name="time"
                                        value={this.state.formData.time}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <button className="ml-10 bg-green-400 mt-[130px] text-white p-2 rounded"
                                        onClick={this.handleTableBooking}>
                                    Book a Table
                                </button>
                            </div>
                        </div>
                        <div className="flex-col-3 max-w-md p-4">
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Phone Number:
                                    <input
                                        className="w-full text-black p-2 border rounded"
                                        type="text"
                                        name="phoneNumber"
                                        value={this.state.formData.phoneNumber}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Number Of People:
                                    <input
                                        className="w-full p-2 text-black border rounded"
                                        type="text"
                                        name="phone"
                                        value={this.state.formData.phone}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default ReservationForm;
