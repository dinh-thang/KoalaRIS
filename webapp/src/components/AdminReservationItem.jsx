export default function AdminReservationItem({
    reservation_no, customer_name, guest_qty, time, date, status, onClick
}) {
    return (
        <tr onClick={onClick} class="cursor-pointer">
            <td class="px-4 py-3">{reservation_no}</td>
            <td class="px-4 py-3">{customer_name}</td>
            <td class="px-4 py-3">{guest_qty}</td>
            <td class="px-4 py-3">{time}</td>
            <td class="px-4 py-3">{date}</td>
            <td class="px-4 py-3"><span class="px-10 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-white">{status}</span></td>
        </tr>
    );
}
   