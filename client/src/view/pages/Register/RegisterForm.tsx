import React, { ChangeEvent, FormEvent, useState } from 'react';
import menlistu from "../../../assets/images/menlistu.jpg";

interface RegisterFormData {
    fullName: string;
    username: string;
    email: string;
    phone: string;
    nic: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<RegisterFormData>({
        fullName: '',
        username: '',
        email: '',
        phone: '',
        nic: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Registration form submitted:', formData);
    };

    return (
        <section
            className=" w-full h-screen mt-12 bg-cover bg-center"
            style={{backgroundImage: `url(${menlistu})`}}
        >
            <div className="flex flex-1  mb-1 justify-start items-center flex-col gap-5">
                <h5 className="font-bold mt-9 text-white text-4xl">Register</h5>
                <p className="text-xl uppercase  font-serif text-amber-950 font-light">fill Form</p>
            </div>
        <form className="flex mx-auto w-[550px] bg-black bg-opacity-50" onSubmit={handleSubmit}>
            <div className="flex-col w-1/2 p-4 text-white">


                <div className="mb-4 ">
                    <label className="block text-sm font-semibold mb-2" htmlFor="fullName">
                        Full Name:
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="username">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="email">
                        Phone:
                    </label>
                    <input
                        type="phone"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>
            </div>

            <div className="flex-col w-1/2 p-4 text-white">
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="nic">
                        NIC:
                    </label>
                    <input
                        type="text"
                        id="nic"
                        name="nic"
                        value={formData.nic}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" htmlFor="confirmPassword">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>

                <div className="flex justify-self-center">
                    <button type="submit" className="bg-green-400 text-white py-2 px-4 ml-8  mt-7  w-[180px] rounded hover:bg-green-700">
                        Register Now
                    </button>
                </div>
            </div>
        </form>
        </section>
    );
};

export default RegisterForm;
