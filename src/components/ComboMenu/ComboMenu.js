import {  Button, Grid, CardMedia, CardContent, Typography, Card, Box } from "@mui/material";
import { useDispatch} from "react-redux";
import { orderMenuSizeChange } from "../../action/order.action";
function ComboMenu({ prosComboSize, prosSetComboSize}){
    //B3: khai báo dispatch để đẩy action lên reducer
    const dispatch = useDispatch();
    //B1: Nhận giá trị của state trong giai đoạn mounting
    
    //B2: Khai báo action
    const onClickComboSizeS = (event) => {
        prosSetComboSize("S");
        dispatch(orderMenuSizeChange("S"))
        //console.log(prosComboSize);
    }
    const onClickComboSizeM = () => {
        prosSetComboSize("M");
        dispatch(orderMenuSizeChange("M"))
        //console.log(prosComboSize);
    }
    const onClickComboSizeL = () => {
        prosSetComboSize("L");
        dispatch(orderMenuSizeChange("L"))
        //console.log(prosComboSize);
    }
    return(
        <Grid container sx={{mt: 6}}>
            {/* Header combo */}
            <Grid item  md={12} xs={12} sx={{mt: 5, mb:3, color: "orange", display: {md: "flex" , xs: "flex", flexDirection:"column", alignItems: "center" }}}>
                <h2 style={{color: "orange", textDecoration:"underline"}}>Chọn size pizza  </h2>
                <p>Chọn combo pizza phù hợp với nhu cầu của bạn</p>
            </Grid>
            {/* Combo */}
            <Grid item  md={12} xs={12} container sx={{mb:3}}>
                {/* Combo small */}
                <Grid item  md={4} xs={12} sx={{ mt: 1, display: { xs:"flex !important", justifyContent: "center !important" }}}>
                    <Box display="inline-block" mb={2}>
                        <Card sx={{minWidth: "100 "}}>      
                            <CardMedia>
                                <CardContent sx={{padding: "0 !important"}}>
                                <Box sx={{ 
                                    width: "340px",
                                    height: "60px",
                                    display: {md:"flex" , xs: "flex", justifyContent:"center", alignItems:"center"},
                                    backgroundColor: "#FFC107",
                                    borderRadius: "4px 4px 0 0"
                                }}>
                                    <Typography sx={{fontWeight:"500", fontSize:"30px"}}>
                                    S (small)
                                    </Typography>
                                </Box>
                                <Box sx={{display: {md:"flex", xs: "flex", flexDirection:"column", alignItems:"center"}}}>
                                    <Typography variant="body2" sx={{mt: 3}}>
                                    Đường kính: <b>20cm</b>
                                    </Typography>
                                    <Typography variant="body2" sx={{mt: 3}}>
                                    Sườn nướng: <b>2</b>
                                    </Typography>
                                    <Typography variant="body2" sx={{mt: 3}}>
                                    Salad: <b>200g</b>
                                    </Typography>
                                    <Typography variant="body2" sx={{mt: 3}}>
                                    Nước ngọt: <b>2</b>
                                    </Typography>
                                    <Typography sx={{fontSize:"30px", fontWeight: "500", mt: 1, mb: 1}}>150.000</Typography>
                                    <Typography sx={{mb: 2}}>VND</Typography>
                                </Box>
                                <Box sx={{
                                    width: "340px",
                                    height: "50px",
                                    display: {md:"flex", xs: "flex", justifyContent:"center", alignItems:"center"},
                                    borderTop: "1px solid  #E2E2E2"
                                }}>
                                    <Button onClick={onClickComboSizeS} variant="container" sx={{width: "300px", height:"33px", backgroundColor:"#FFC107"}} disableElevation>Chọn</Button>
                                </Box>
                                </CardContent>
                            </CardMedia>
                        </Card>
                    </Box>
                </Grid>
                {/* Combo Medium */}
                <Grid item  md={4} xs={12} sx={{ mt: 1, display: { xs:"flex !important", justifyContent: "center !important" }}}>
                    <Box display="inline-block" mb={2}>
                        <Card sx={{minWidth: "100 "}}>
                            <CardMedia>
                                <CardContent sx={{padding: "0 !important"}}>
                                    <Box sx={{ 
                                        width: "340px",
                                        height: "60px",
                                        display: {md:"flex" , xs: "flex", justifyContent:"center", alignItems:"center"},
                                        backgroundColor: "#FFFF00",
                                        borderRadius: "4px 4px 0 0"
                                    }}>
                                        <Typography sx={{fontWeight:"500", fontSize:"30px"}}>
                                        M (Medium)
                                        </Typography>
                                    </Box>
                                    <Box sx={{fontSize: "16px",display: {md:"flex" , xs: "flex", flexDirection:"column", alignItems:"center"}}}>
                                        <Typography variant="body2" sx={{mt: 3}}>
                                        Đường kính: <b>25cm</b>
                                        </Typography>
                                        <Typography variant="body2" sx={{mt: 3}}>
                                        Sườn nướng: <b>4</b>
                                        </Typography>
                                        <Typography variant="body2" sx={{mt: 3}}>
                                        Salad: <b>300g</b>
                                        </Typography>
                                        <Typography variant="body2" sx={{mt: 3}}>
                                        Nước ngọt: <b>3</b>
                                        </Typography>
                                        <Typography sx={{fontSize:"30px", fontWeight: "500", mt: 1, mb: 1}}>200.000</Typography>
                                        <Typography sx={{mb: 2}}>VND</Typography>
                                    </Box>
                                    <Box sx={{
                                        width: "340px",
                                        height: "50px",
                                        display: {md:"flex" , xs: "flex", justifyContent:"center", alignItems:"center"},
                                        borderTop: "1px solid  #E2E2E2"
                                    }}>
                                        <Button onClick={onClickComboSizeM} variant="container" sx={{width: "300px", height:"33px", backgroundColor:"#FFC107"}} disableElevation>Chọn</Button>
                                    </Box>
                                </CardContent>
                            </CardMedia>
                        </Card>
                    </Box>
                </Grid>
                {/* Combo Large */}
                <Grid item  md={4} xs={12} sx={{ mt: 1, display: { xs:"flex !important", justifyContent: "center !important" }}}>
                    <Box display="inline-block">
                        <Card sx={{minWidth: "100"}}> 
                            <CardMedia>
                                <CardContent sx={{padding: "0 !important"}}>
                                    <Box sx={{ 
                                        width: "340px",
                                        height: "60px",
                                        display: {md:"flex" , xs: "flex", justifyContent:"center", alignItems:"center"},
                                        backgroundColor: "#FFA500",
                                        borderRadius: "4px 4px 0 0"
                                    }}>
                                        <Typography sx={{fontWeight:"500", fontSize:"30px"}}>
                                        L (large)
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: {md:"flex" , xs: "flex", flexDirection:"column", alignItems:"center"}}}>
                                        <Typography variant="body2" sx={{mt: 3}}>
                                        Đường kính: <b>30cm</b>
                                        </Typography>
                                        <Typography variant="body2" sx={{mt: 3}}>
                                        Sườn nướng: <b>8</b>
                                        </Typography>
                                        <Typography variant="body2" sx={{mt: 3}}>
                                        Salad: <b>500g</b>
                                        </Typography>
                                        <Typography variant="body2" sx={{mt: 3}}>
                                        Nước ngọt: <b>4</b>
                                        </Typography>
                                        <Typography sx={{fontSize:"30px", fontWeight: "500", mt: 1,  mb: 1}}>250.000</Typography>
                                        <Typography sx={{mb: 2}}>VND</Typography>
                                    </Box>
                                    <Box sx={{
                                        width: "340px",
                                        height: "50px",
                                        display: {md:"flex" , xs: "flex", justifyContent:"center", alignItems:"center"},
                                        borderTop: "1px solid  #E2E2E2"
                                    }}>
                                        <Button onClick={onClickComboSizeL} variant="container" sx={{width: "300px", height:"33px", backgroundColor:"#FFC107"}} disableElevation>Chọn</Button>
                                    </Box>
                                </CardContent>
                            </CardMedia>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ComboMenu