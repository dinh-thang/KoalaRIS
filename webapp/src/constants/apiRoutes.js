export const apiRoutes = {
    HTTP: "http://localhost:5000",

    LOGIN: "/login",
    SIGNUP: "/signup",

    MAKE_BOOKING: "/booking/make-booking",
    UPDATE_BOOKING: "/booking/update-booking",
    CANCEL_BOOKING: "/booking/cancel-booking",
    GET_ALL_BOOKINGS: "/booking/get-all-booking",

    ADMIN_GET_ALL_BOOKINGS: "/admin/get-all-booking",
    ADMIN_GET_TOTAL_SALE_TODAY: "/admin/get-total-sale-today",
    ADMIN_GET_TOTAL_DINE_IN: "/admin/get-total-dine-in",
    ADMIN_GET_TOTAL_TAKEAWAY: "/admin/get-total-takeaway",
    ADMIN_GET_TOTAL_GUESTS: "/admin/get-total-guests",

    ORDER_GET_BY_ID: "/order/get-by-id",
    ORDER_MAKE_ORDER: "/order/make-order",
    ORDER_GET_ALL_FOR_ACCOUNT: "/order/get-all-for-account",
    ORDER_COMPLETE_ORDER: "/order/complete-order",
    ORDER_ADD_DELIVERY_DETAIL: "/order/add-deli-detail",
    ORDER_ADD_PAYMENT_DETAIL: "/order/add-payment-detail",

    CART_INIT: "/cart/init",
    CART_ADD_ITEM: "/cart/add-item-to-cart",
    CART_REMOVE_ITEM: "/cart/remove-item-from-cart",

    ITEM_ADD_NEW: "/item/add-new-item",
    ITEM_GET_ALL: "/item/get-all-items",
    ITEM_GET_ALL_IN_CART: "/item/cart/get-all-items-in-cart",
}
export default apiRoutes;