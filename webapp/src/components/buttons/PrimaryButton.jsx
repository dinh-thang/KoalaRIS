import React from "react";

const PrimaryButton = ({label, className}) => {
    return (
        <div className="flex items-center justify-center">
            <button
                className={`text-white bg-red font-bold py-2 px-4 rounded w-full ${className}`}
            >
                {label}
            </button>
        </div>
    )
}
export default PrimaryButton;