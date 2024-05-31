import React, { useState } from "react";
import creditcard from '../../images/creditcard.png';
import cards from '../../images/cards.png';
import { useNavigate } from "react-router-dom";
import { pageRoutes } from '../../constants/pageRoutes.js';

const Reservation = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
    quantity: "",
    bookdate: "",
  });

  const navigate = useNavigate();
  const navigateToCheckOut = () => {
    navigate(pageRoutes.CHECKOUT_CONFIRMATION);
  };

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formValues.firstName.match(/^[a-zA-Z]+$/)) {
      errors.firstName = "Invalid type!";
    }
    if (!formValues.lastName.match(/^[a-zA-Z]+$/)) {
      errors.lastName = "Invalid type!";
    }
    if (!formValues.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Email is invalid.";
    }
    if (!formValues.phoneNumber.match(/^(\+61|0)4\d{8}$/)) {
      errors.phoneNumber = "Phone number is invalid.";
    }
    if (!formValues.paymentType) {
      errors.paymentType = "Payment type is required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="w-full mx-auto bg-white p-16 border border-gray-200">
      <form id="check-out-form" onSubmit={handleSubmit}> 

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-red">Make Reservation</h1>
          <div className="bg-red text-white py-2 px-4 rounded">
            Table 5
          </div>
        </div>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        {/* Personal Details */}
        <div className="mb-6">
          <h2 className="font-semibold mb-4">Personal Details</h2>    
          <div className="grid grid-cols-2 gap-4">
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border p-2 rounded w-full"
                    value={formValues.email}
                    onChange={handleChange}
                />
                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>
            <div>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="border p-2 rounded w-full"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                />
                {formErrors.phoneNumber && <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>}
            </div>
           </div>
        </div>

        {/* Booking Details */}
        <div className="mb-6">
          <h2 className="font-semibold mb-4">Booking Details</h2>
          <div className="grid grid-cols-2 gap-4">

                <div>
                    <input
                    type="text"
                    name="quantity"
                    placeholder="Number of Guests"
                    className="border p-2 rounded w-1/8"
                    value={formValues.quantity}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                    type="date"
                    name="bookdate"
                    placeholder="Book Date"
                    className="border p-2 rounded w-1/8"
                    value={formValues.bookdate}
                    onChange={handleChange}
                    />
                </div>
            </div>
        </div>

       
        <input
          type="submit"
          className="bg-red hover:bg-red-hover text-white font-bold py-2 px-4 rounded w-full cursor-pointer" onClick={navigateToCheckOut}
        />
      </form>
    </div>
  );
};

export default Reservation;