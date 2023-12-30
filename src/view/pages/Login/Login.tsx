
import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (

                <form className="form-body bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
                    <div className="mb-4 text-center">
                        <label className="block text-sm font-medium text-gray-600">Email:</label>
                        <input
                            className="form-input text-center"
                            type="email"
                            placeholder="john.doe@example.com"
                        />
                    </div>

                    <div className="mb-4 text-center">
                        <label className="block text-sm font-medium text-gray-600">Password:</label>
                        <input
                            className="form-input text-center"
                            type="password"
                            placeholder="********"
                        />
                    </div>

                    <div className="mt-4 text-center">
                        <button className="form-button bg-green-500 text-white px-4 py-2 rounded-md transition hover:bg-green-600">
                            Sign In
                        </button>
                    </div>
                </form>

        );
    }
}

export default Login;
