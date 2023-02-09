import { ORDER_MENU_SIZE_CHANGE, 
    ORDER_PIZZA_TYPE_CHANGE, 
    ORDER_DRINK_CHANGE, 
    ORDER_CLIENT_FULLNAME_CHANGE,
    ORDER_CLIENT_EMAIL_CHANGE,
    ORDER_CLIENT_ADDRESS_CHANGE,
    ORDER_CLIENT_PHONENUMBER_CHANGE,
    ORDER_CLIENT_VOUCHER_CHANGE,
    ORDER_CLIENT_MESSAGE_CHANGE,
    ORDER_SEND_DATA
} from "../constants/order.constant";

const orderMenuSizeChange = (value) => {
    return{
        type: ORDER_MENU_SIZE_CHANGE,
        payload: value
    }
}
const orderPizzaTypeChange = (value) => {
    return{
        type: ORDER_PIZZA_TYPE_CHANGE,
        payload: value
    }
}
const orderDrinkChange = (value) => {
    return{
        type: ORDER_DRINK_CHANGE,
        payload: value
    }
} 
const orderFullNameChange = (value) => {
    return{
        type: ORDER_CLIENT_FULLNAME_CHANGE,
        payload: value
    }
}
const orderEmailChange = (value) => {
    return{
        type: ORDER_CLIENT_EMAIL_CHANGE,
        payload: value
    }
}
const orderPhoneNumberChange = (value) => {
    return{
        type: ORDER_CLIENT_PHONENUMBER_CHANGE,
        payload: value
    }
}
const orderAddressChange = (value) => {
    return{
        type: ORDER_CLIENT_ADDRESS_CHANGE,
        payload: value
    }
}
const orderVoucherChange = (value) => {
    return{
        type: ORDER_CLIENT_VOUCHER_CHANGE,
        payload: value
    }
}
const orderMessageChange = (value) => {
    return{
        type: ORDER_CLIENT_MESSAGE_CHANGE,
        payload: value
    }
}
const sendDataToConsole = () => {
    return{
        type: ORDER_SEND_DATA,
    }
}
export{
    orderMenuSizeChange,
    orderPizzaTypeChange,
    orderDrinkChange,
    orderFullNameChange,
    orderEmailChange,
    orderPhoneNumberChange,
    orderAddressChange,
    orderVoucherChange,
    orderMessageChange,
    sendDataToConsole
}