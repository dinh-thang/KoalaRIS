export default function MenuItem({
    image, name, price 
}) {
    return (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-gray-700">{price}</p>
              <button className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                Add to Cart
              </button>
            </div>
          </div>
    );
}
   


