import dinein from '../../images/dinein.png';

const CheckoutConfirmation = () => {
    return (
    <div class="max-w-4xl mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-lg mt-10 relative">
        <div class="circle-bg w-48 h-48 rounded-full absolute left-1/2 transform -translate-x-1/2 -top-24"></div>
        <img src={dinein} alt="Fries" class="mx-auto relative z-10"></img>


        <div class="text-center mt-10">
            <h1 class="text-2xl font-semibold">Order Submitted</h1>
            <p class="text-gray-500 mb-1">Order ID: #123456789</p>
        </div>

        <div class="mt-6 flex flex-col items-center">
            <div class="flex flex-col items-center mb-2">
                <div class="bg-yellow-500 rounded-full h-5 w-5 flex items-center justify-center mb-1">
                    <div class="h-3 w-3 bg-yellow-200 rounded-full"></div>
                </div>
                <p class="text-sm text-gray-600">Order Submitted</p>
            </div>
            <div class="h-8 w-0.5 bg-gray-400 mb-2"></div>
            <div class="flex flex-col items-center mb-2">
                <div class="bg-gray-300 rounded-full h-5 w-5 mb-1"></div>
                <p class="text-sm text-gray-600">Order Delivered</p>
            </div>
            <div class="h-8 w-0.5 bg-gray-400 mb-2"></div>
            <div class="flex flex-col items-center">
                <div class="bg-gray-300 rounded-full h-5 w-5 mb-1"></div>
                <p class="text-sm text-gray-600">Delivered</p>
            </div>
        </div>

        <div class="mt-6 px-10">
            <p class="text-gray-600 text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, leo sit amet suscipit cursus, sem mi mollis augue, non maximus mi sem ut leo.</p>
            <p class="text-gray-600 text-center mb-6">Vivamus ut vestibulum leo. Sed hendrerit finibus blandit. Ut eu magna et libero ornare lacinia eu sed enim.</p>
            <div class="flex justify-center space-x-4">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Order More</button>
                <button class="bg-white hover:bg-gray-100 text-red-500 border border-red-500 font-bold py-2 px-4 rounded">View Receipt</button>
            </div>
        </div>
    </div>
    )
}

export default CheckoutConfirmation;