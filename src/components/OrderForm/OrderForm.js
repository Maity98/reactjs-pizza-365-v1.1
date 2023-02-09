import { Grid, TextField, Button } from "@mui/material"
import { useDispatch } from "react-redux";
import {sendDataToConsole, orderFullNameChange, orderEmailChange, orderPhoneNumberChange,orderAddressChange, orderMessageChange, orderVoucherChange } from "../../action/order.action";
function OrderForm ({prosFullName, prosEmail, prosPhoneNumber, prosAddress, prosVoucher, prosMessage, prosDrink, prosComboSize, prosPizzaType,
  // pros setSate
  prosSetFullName ,
  prosSetEmail,
  prosSetPhoneNumber,
  prosSetAddress ,
  prosSetVoucher ,
  prosSetMessage ,
  prosSendData
  }){
    //khai báo dispath 
    const dispath = useDispatch();
    //hàm lấy dữ liệu input 
      const onChangeFullName = event => {
        prosSetFullName(event.target.value);
        // console.log(event.target.value);
        dispath(orderFullNameChange(event.target.value));
      }
      const onChangeEmail = event => {
        prosSetEmail(event.target.value);
        // console.log(event.target.value);
        dispath(orderEmailChange(event.target.value));
      }
      const onChangePhoneNumer = event => {
        prosSetPhoneNumber(event.target.value);
        // console.log(event.target.value);
        dispath(orderPhoneNumberChange(event.target.value));
      }
      const onChangeAddress = event => {
        prosSetAddress(event.target.value);
        // console.log(event.target.value);
        dispath(orderAddressChange(event.target.value));
      }
      const onChangeVoucher = event => {
        prosSetVoucher(event.target.value);
        // console.log(event.target.value);
        dispath(orderMessageChange(event.target.value));
      }
      const onChangeMessage = event => {
        prosSetMessage(event.target.value);
        // console.log(event.target.value);
        dispath(orderVoucherChange(event.target.value));
      }
      const sendData = (event) => {
        //tránh load lại trang
        event.preventDefault();
        dispath(sendDataToConsole());
      }
      return(
        <Grid container sx={{mb: 4}}>
            {/* header form */}
            <Grid item  md={12} xs={12} sx={{mb:3, color:"orange", textDecoration: "underline",  display:{md:"flex", justifyContent:"center"}}}>
              <h3>Gửi đơn hàng</h3>
            </Grid>
            {/* input */}
            <Grid item  md={2} xs={2} sx={{mb:3, display:{md:"flex", alignItems:"center"}}}>
              <label>Họ và tên</label>
            </Grid>
            <Grid item  md={4} xs={4}>
              <TextField id="Fullname" label="Họ và tên" size="small" onChange={onChangeFullName} sx={{mb:3, width:"95%"}}/>      
            </Grid>
            <Grid item  md={2} xs={2} sx={{mb:3, display:{md:"flex", alignItems:"center"}}}>
              <label>Email</label>
            </Grid>
            <Grid item  md={4} xs={4}>
              <TextField id="Email" label="Email" size="small" onChange={onChangeEmail} sx={{mb:3, width:"100%"}}/>      
            </Grid>
            <Grid item  md={2} xs={2} sx={{mb:3, display:{md:"flex", alignItems:"center"}}}>
              <label>Số điện thoại</label>
            </Grid>
            <Grid item  md={4} xs={4}>
              <TextField id="Phone number" label="Số điện thoại" size="small" onChange={onChangePhoneNumer} sx={{mb:3, width:"95%"}}/>      
            </Grid>
            <Grid item  md={2} xs={2} sx={{mb:3, display:{md:"flex", alignItems:"center"}}}>
              <label>Địa chỉ</label>
            </Grid>
            <Grid item  md={4} xs={4}>
              <TextField id="Địa chỉ" label="Địa chỉ" size="small" onChange={onChangeAddress} sx={{mb:3, width:"100%"}}/>      
            </Grid>
            <Grid item  md={2}  xs={2} sx={{mb:3, display:{md:"flex", alignItems:"center"}}}>
              <label>Mã Giảm Giá</label>
            </Grid>
            <Grid item  md={4} xs={4}>
              <TextField id="Voucher ID" label="Voucher ID" size="small" onChange={onChangeVoucher} sx={{mb:3, width:"95%"}}/>      
            </Grid>
            <Grid item  md={2} xs={2} sx={{mb:3, display:{md:"flex", alignItems:"center"}}}>
              <label>Lời nhắn</label>
            </Grid>
            <Grid item  md={4} xs={4}>
              <TextField id="Message" label="Lời nhắn" size="small" onChange={onChangeMessage} sx={{mb:3, width:"100%"}}/>      
            </Grid>
            <Grid item  md={12} xs={12}>
              <Button onClick={sendData} type="submit" sx={{backgroundColor:"#FFC107", color:"black", width:"100%"}}>Gửi</Button>
            </Grid>
        </Grid> 
      )
}

export default OrderForm 