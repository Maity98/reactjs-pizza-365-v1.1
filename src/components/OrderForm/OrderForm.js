import { Grid, TextField, Button } from "@mui/material"
function OrderForm (){
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
              <TextField id="Fullname" label="Họ và tên" size="small"  sx={{mb:3, width:"95%"}}/>      
            </Grid>
            <Grid item  md={2} xs={2} sx={{mb:3, display:{md:"flex", alignItems:"center"}}}>
              <label>Email</label>
            </Grid>
            <Grid item  md={4} xs={4}>
              <TextField id="Email" label="Email" size="small"  sx={{mb:3, width:"100%"}}/>      
            </Grid>
            <Grid item  md={2} xs={2} sx={{mb:3, display:{md:"flex", alignItems:"center"}}}>
              <label>Số điện thoại</label>
            </Grid>
            <Grid item  md={4} xs={4}>
              <TextField id="Phone number" label="Số điện thoại" size="small"  sx={{mb:3, width:"95%"}}/>      
            </Grid>
            <Grid item  md={2} xs={2} sx={{mb:3, display:{md:"flex", alignItems:"center"}}}>
              <label>Địa chỉ</label>
            </Grid>
            <Grid item  md={4} xs={4}>
              <TextField id="Địa chỉ" label="Địa chỉ" size="small"  sx={{mb:3, width:"100%"}}/>      
            </Grid>
            <Grid item  md={2}  xs={2} sx={{mb:3, display:{md:"flex", alignItems:"center"}}}>
              <label>Mã Giảm Giá</label>
            </Grid>
            <Grid item  md={4} xs={4}>
              <TextField id="Voucher ID" label="Voucher ID" size="small"  sx={{mb:3, width:"95%"}}/>      
            </Grid>
            <Grid item  md={2} xs={2} sx={{mb:3, display:{md:"flex", alignItems:"center"}}}>
              <label>Lời nhắn</label>
            </Grid>
            <Grid item  md={4} xs={4}>
              <TextField id="Message" label="Lời nhắn" size="small"  sx={{mb:3, width:"100%"}}/>      
            </Grid>
            <Grid item  md={12} xs={12}>
              <Button sx={{backgroundColor:"#FFC107", color:"black", width:"100%"}}>Gửi</Button>
            </Grid>
        </Grid>
         
    )
}

export default OrderForm