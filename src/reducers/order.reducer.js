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
//Global State
const initialState = {
    orderContainer:{
        menuSize: {
            size: "",
            duongKinh: "" ,
            suon: -1,
            salad: "",
            soLuongNuoc: -1,
            donGia: -1,
        },
        loaiPizza: "",
        loaiDoUong: "",
        hoVaTen:"",
        email:"",
        soDienThoai:"",
        diaChi:"",
        maGiamGia:"",
        loiNhan:""
    },
    orderInfo:{
        menuSize: {
            size: "",
            duongKinh: "" ,
            suon: -1,
            salad: "",
            soLuongNuoc: -1,
            donGia: -1,
        },
        loaiPizza: "",
        loaiDoUong: "",
        hoVaTen:"",
        email:"",
        soDienThoai:"",
        diaChi:"",
        maGiamGia:"",
        loiNhan:""
    }
}
//hàm validate order
const validateOrder = (param) => {
    if(param.menuSize.size === "") {
        alert("Bạn chưa chọn Combo!");
        return false;
    }if(param.loaiPizza === "") {
        alert("Bạn chưa chọn Pizza!");
        return false;
    }if(param.loaiDoUong === "") {
        alert("Bạn chưa chọn đồ uống!");
        return false;
    }if(param.hoVaTen === "") {
        alert("Bạn chưa nhập họ và tên!");
        return false;
    }if(param.email === "") {
        alert("Bạn chưa nhập email!");
        return false;
    }if(param.soDienThoai === "") {
        alert("Bạn chưa nhập số điện thoại!");
        return false;
    }if(param.menuSize.size === "") {
        alert("Bạn chưa nhập địa chỉ!");
        return false;
    }if( param.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) == null){
        alert("Email không đúng cú pháp!");
        return false;
    }if( param.soDienThoai.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/) == null){
        alert("Số điện thoại chưa đúng!");
        return false;
    }if(param.maGiamGia !== ""){

    }
    return true;
}
//hàm gửi request check ma giảm giá
const orderReducer = (state = initialState, action)=> {
    switch (action.type){
        
        case ORDER_MENU_SIZE_CHANGE:
            state.orderContainer.menuSize.size = action.payload;
            // console.log(state.orderContainer);
            //thêm thông tin vào trường menuSize khi có thông tin size {"S", "M", "L"}
            if(state.orderContainer.menuSize.size === "S"){
                state.orderContainer.menuSize.duongKinh = "20cm";
                state.orderContainer.menuSize.suon = 2;
                state.orderContainer.menuSize.salad = "200g";
                state.orderContainer.menuSize.soLuongNuoc = 2;
                state.orderContainer.menuSize.donGia = 150000;
                // console.log(state.orderContainer);
            }
            if(state.orderContainer.menuSize.size === "M"){
                state.orderContainer.menuSize.duongKinh = "25cm";
                state.orderContainer.menuSize.suon = 4;
                state.orderContainer.menuSize.salad = "300g";
                state.orderContainer.menuSize.soLuongNuoc = 3;
                state.orderContainer.menuSize.donGia = 200000;
                // console.log(state.orderContainer);
            }
            if(state.orderContainer.menuSize.size === "L"){
                state.orderContainer.menuSize.duongKinh = "30cm";
                state.orderContainer.menuSize.suon = 8;
                state.orderContainer.menuSize.salad = "500g";
                state.orderContainer.menuSize.soLuongNuoc = 4;
                state.orderContainer.menuSize.donGia = 250000;
                // console.log(state.orderContainer);
            }
            break;
        case ORDER_PIZZA_TYPE_CHANGE: 
            state.orderContainer.loaiPizza = action.payload;
            break;
        case ORDER_DRINK_CHANGE:
            state.orderContainer.loaiDoUong = action.payload;
            break;
        case ORDER_CLIENT_FULLNAME_CHANGE:
            state.orderContainer.hoVaTen = action.payload;
            break;
        case ORDER_CLIENT_EMAIL_CHANGE:
            state.orderContainer.email = action.payload;
            break;
        case ORDER_CLIENT_PHONENUMBER_CHANGE:
            state.orderContainer.soDienThoai = action.payload;
            break;
        case ORDER_CLIENT_ADDRESS_CHANGE:
            state.orderContainer.diaChi = action.payload;
            break;
        case ORDER_CLIENT_VOUCHER_CHANGE:
            state.orderContainer.maGiamGia = action.payload;
            break;
        case ORDER_CLIENT_MESSAGE_CHANGE:
            state.orderContainer.loiNhan = action.payload;
            break;
        case ORDER_SEND_DATA:
            //validate dữ liệu
            if(validateOrder(state.orderContainer)){
                console.log(state.orderContainer); 
            }
            break;
    default:
        break;
    }
    return {...state};
}
export default orderReducer;