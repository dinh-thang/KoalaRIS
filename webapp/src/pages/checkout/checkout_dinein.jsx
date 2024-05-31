import React, { useState } from "react";
import creditcard from '../../images/creditcard.png';
import cards from '../../images/cards.png';
import { useNavigate } from "react-router-dom";
import { pageRoutes } from '../../constants/pageRoutes.js';

const CheckOutDineIn = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    deliveryNotes: "",
    paymentType: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const navigate = useNavigate();

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
      navigate(pageRoutes.CHECKOUT_CONFIRMATION);
    }
  };

  return (
    <div className="w-full mx-auto bg-white p-16 border border-gray-200">
      <form id="check-out-form" onSubmit={handleSubmit}> 

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-red">Check-out</h1>
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
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border p-2 rounded w-full"
                value={formValues.firstName}
                onChange={handleChange}
              />
              {formErrors.firstName && <p className="text-red text-sm">{formErrors.firstName}</p>}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border p-2 rounded w-full"
                value={formValues.lastName}
                onChange={handleChange}
              />
              {formErrors.lastName && <p className="text-red text-sm">{formErrors.lastName}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border p-2 rounded w-full"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && <p className="text-red text-sm">{formErrors.email}</p>}
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
              {formErrors.phoneNumber && <p className="text-red text-sm">{formErrors.phoneNumber}</p>}
            </div>
          </div>
        </div>

        {/* Payment Type */}
        <div className="mb-6">
        <h2 className="font-semibold mb-4">Payment Type</h2>
            <div className="border rounded">
                <label className="border-b p-2 flex items-center justify-between">
                <div className="m-4">
                    <input
                    type="radio"
                    id="credit_card"
                    name="paymentType"
                    value="credit_card"
                    className="mr-2"
                    checked={formValues.paymentType === "credit_card"}
                    onChange={handleChange}
                    />
                    Visa/Credit Card/Amex/Mastercard
                </div>
                <img src={cards} alt="Visa" className="w-24 m-4" />
                </label>
                <label className="p-2 flex items-center justify-between">
                <div className="m-4">
                    <input
                    type="radio"
                    id="offline"
                    name="paymentType"
                    value="offline_payment"
                    className="mr-2"
                    checked={formValues.paymentType === "offline_payment"}
                    onChange={handleChange}
                    />
                    Pay offline by Credit Card
                </div>
                <img src={creditcard} alt="Offline Payment" className="w-8 m-4" />
                </label>
            </div>
            {formErrors.paymentType && (
              <p className="text-red text-sm">{formErrors.paymentType}</p>
            )}
        </div>

        {/* Payment Detail */}
        {formValues.paymentType === "credit_card" && (
          <div className="mb-6">
            <h2 className="font-semibold mb-4">Payment Detail</h2>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              className="border p-2 rounded w-1/2 mb-4"
              value={formValues.cardNumber}
              onChange={handleChange}
            />
            <div className="flex flex-row">
              <input
                type="text"
                name="expiryDate"
                placeholder="Expiry Date"
                className="border p-2 rounded w-1/4"
                value={formValues.expiryDate}
                onChange={handleChange}
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                className="border p-2 rounded w-1/4"
                value={formValues.cvc}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        <input
          type="submit"
          value="Pay"
          className="bg-red hover:bg-red-hover text-white font-bold py-2 px-4 rounded w-full cursor-pointer" onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default CheckOutDineIn;