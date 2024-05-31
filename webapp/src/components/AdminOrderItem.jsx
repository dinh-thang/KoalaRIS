export default function AdminOrderItem({
    order_no, customer_name, method, table_no, meal_no, bill, onClick
}) {
    return (
        <tr onClick={onClick} className="cursor-pointer">
            <td className="px-4 py-3">{order_no}</td>
            <td className="px-4 py-3">{customer_name}</td>
            <td className="px-4 py-3">
                <span className="px-4 py-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-300 text-red">{method}</span>
            </td>
            <td className="px-4 py-3">{table_no}</td>
            <td className="px-4 py-3">{meal_no}</td>
            <td className="px-4 py-3">{bill}</td>
        </tr>
    );
}
   