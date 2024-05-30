const Checkout = () => {
    return (
        <div class="w-full mx-auto bg-white p-8 border border-gray-200">
            <form id="check-out-form" action="#" method="post"> 

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-red-600">Check-out</h1>
                    <div className="bg-red-600 text-white py-2 px-4 rounded">
                    Table 5
                    </div>
                </div>
                <p class="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                {/* Personal Details */}
                <div class="mb-6">
                    <h2 class="font-semibold mb-4">Personal Details</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" class="border p-2 rounded w-full"></input>
                        <input type="text" placeholder="Last Name" class="border p-2 rounded w-full"></input>
                        <input type="email" placeholder="Email" class="border p-2 rounded w-full"></input>
                        <input type="text" placeholder="Phone Number" class="border p-2 rounded w-full"></input>
                    </div>
                </div>

                {/* Delivery Details */}
                <div class="mb-6">
                    <h2 class="font-semibold mb-4">Delivery Details</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" class="border p-2 rounded w-full"></input>
                        <input type="text" placeholder="Last Name" class="border p-2 rounded w-full"></input>
                        <input type="text" placeholder="Address" class="border p-2 rounded w-full"></input>
                        <input type="text" placeholder="Phone Number" class="border p-2 rounded w-full"></input>
                        <textarea placeholder="Delivery Notes" class="border p-2 rounded w-full col-span-2"></textarea>
                    </div>
                </div>

                {/* Payment Type */}
                <div class="mb-6">
                    <h2 class="font-semibold mb-4">Payment Type</h2>
                    <div class="flex flex-col">
                        <label class="border p-2 rounded mb-2">
                            <input type="radio" id="credit_card" name="payment_type" value="credit_card" class="mr-2"></input>
                            Visa/Credit Card/Amex/Mastercard
                        </label>
                        <label class="border p-2 rounded">
                            <input type="radio" id="offline" name="payment_type" value="offline_payment" class="mr-2"></input>
                            Pay offline by Credit Card
                        </label>
                    </div>
                </div>

                {/* Payment Detail */}
                <div class="mb-6">
                    <h2 class="font-semibold mb-4">Payment Detail</h2>
                    <input type="text" placeholder="Card Number" class="border p-2 rounded w-1/2 mb-4"></input>
                    <div class="grid grid-cols-3 gap-4">
                        <input type="text" placeholder="Expiry Date" class="border p-2 rounded w-1/2"></input>
                        <input type="text" placeholder="CVC" class="border p-2 rounded w-1/2"></input>
                    </div>
                </div>

                <input type="submit" value="Pay" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full cursor-pointer"></input>
            </form>
        </div>
        
    )
}

export default Checkout;