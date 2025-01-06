import React, { useState } from "react";

const TicketsPurchaseForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear the error as user types
        setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        const newErrors: any = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First Name is required";
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile Number is required";
        } else if (!/^0\d{9}$/.test(formData.mobile) && !/^\+94\d{9}$/.test(formData.mobile)) {
            newErrors.mobile =
                "Mobile number must start with '0' or '+94' and contain 10 digits in total";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            console.log("Form Data:", formData);
            alert("Form submitted successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                mobile: "",
            });
        }
    };

    return (
        <div className="max-w-lg p-6 bg-white rounded text-black max-[950px]:p-1">
            <h2 className="text-xl font-bold mb-4 max-[950px]:text-lg">Enter Correct Information of Yours</h2>
            <div className="flex">
                <span className="text-red-400 pr-2">*</span>
                <h2 className="text-sm font-bold mb-4 text-red-400 max-[950px]:text-xs">Your ticket will send via email that you are providing!</h2>
            </div>

            <div className="flex">
                <span className="text-red-400 pr-2">*</span>
                <h2 className="text-sm font-bold mb-4 text-red-400 inline-block flex-grow max-[950px]:text-xs">If there any issue with your ticket you can retrieve ticket by confirming your provided data.</h2>
            </div>

            <form onSubmit={handleSubmit}>
                {/* First Name */}
                <div className="mb-4 max-[950px]:text-xs">
                    <label htmlFor="firstName" className="block font-medium">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={`w-full border px-3 py-2 max-[950px]:px-2 max-[950px]:py-1  bg-transparent rounded ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm max-[950px]:text-[10px]">{errors.firstName}</p>}
                </div>

                {/* Last Name */}
                <div className="mb-4 max-[950px]:text-xs">
                    <label htmlFor="lastName" className="block font-medium">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={`w-full border px-3 py-2 max-[950px]:px-2 max-[950px]:py-1 bg-transparent rounded ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm max-[950px]:text-[10px]">{errors.lastName}</p>}
                </div>

                {/* Email */}
                <div className="mb-4 max-[950px]:text-xs">
                    <label htmlFor="email" className="block font-medium">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full border px-3 py-2 max-[950px]:px-2 max-[950px]:py-1 bg-transparent rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm max-[950px]:text-[10px]">{errors.email}</p>}
                </div>

                {/* Mobile Number */}
                <div className="mb-4 max-[950px]:text-xs">
                    <label htmlFor="mobile" className="block font-medium">
                        Mobile Number
                    </label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        className={`w-full border px-3 py-2 max-[950px]:px-2 max-[950px]:py-1 bg-transparent rounded ${errors.mobile ? "border-red-500" : "border-gray-300"}`}
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    {errors.mobile && <p className="text-red-500 text-sm max-[950px]:text-[10px]">{errors.mobile}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 max-[950px]:text-sm max-[950px]:py-1"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TicketsPurchaseForm;
