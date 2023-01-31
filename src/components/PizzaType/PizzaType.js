import {  Button, Grid, CardMedia, CardContent, Typography, Card, Box } from "@mui/material";


function PizzaType(){
    return(
        <Grid container sx={{mt: 6}}>
            <Grid item  md={12} xs={12} sx={{mt: 2, mb:2, color: "orange",  display: { xs:"flex", flexDirection:"column", alignItems: "center" }}}>
                <h2 style={{color: "orange", textDecoration:"underline"}}>Chọn loại pizza</h2>
            </Grid>
            {/* Loại pizza */}
            <Grid item  md={12} sm={12} container >
                <Grid item  md={4} xs={12} sx={{ mt: 1, display: { xs:"flex !important", justifyContent: "center !important" }}} >
                    <Box mb={2}>
                        <Card >
                            <CardMedia 
                                     component="img" alt="pizza hải sản" height="230px"  image={require("../../assets/images/seafood.jpg")} sx ={{borderRadius: "4px 4px 0 0"}}/>
                                <CardContent sx={{width:"340px"}}>
                                    <Box sx={{fontSize: "16px",display: {md:"flex", flexDirection:"column", alignItems:"start"}}}>
                                    <Typography variant="body2" sx={{ fontSize:"20px", fontWeight:"400" }}>
                                        OCEAN MANIA
                                    </Typography>
                                    <Typography variant="body2" sx={{mt: 3, fontWeight:"100"}}>
                                        PIZZA HẢI SẢN SỐT MAYONNAISE
                                    </Typography>
                                    <Typography variant="body2" sx={{mt: 3}}>
                                    Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây
                                    </Typography>
                                    </Box>
                                    <Box sx={{
                                    mt: 1,
                                    width: "315px",
                                    height: "50px",
                                    display: {md:"flex", justifyContent:"center", alignItems:"center"},
                                    }}>
                                    <Button variant="container" sx={{width: "320px", height:"33px", backgroundColor:"#FFC107"}} disableElevation>Chọn</Button>
                                    </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
                <Grid item  md={4} xs={12} sx={{ mt: 1  , display: { xs:"flex !important", justifyContent: "center !important" }}}>
                    <Box  mb={2}>
                        <Card >
                
                            <CardMedia 
                            component="img" alt="pizza hải sản" height="230px"  image={require("../../assets/images/hawaiian.jpg")} sx ={{borderRadius: "4px 4px 0 0"}}/>
                            <CardContent sx={{width:"340px"}}>
                                <Box sx={{fontSize: "16px",display: {md:"flex", flexDirection:"column", alignItems:"start"}}}>
                                <Typography variant="body2" sx={{ fontSize:"20px", fontWeight:"400" }}>
                                    HAWAIIAN
                                </Typography>
                                <Typography variant="body2" sx={{mt: 3, fontWeight:"100"}}>
                                    PIZZA  DĂM BÔNG DỨA KIỂU HAWAII
                                </Typography>
                                <Typography variant="body2" sx={{mt: 3}}>
                                    Xốt Cà Chua, Phô Mai Mozzarella, Thịt Dăm Bông.
                                </Typography>
                                </Box>
                                <Box sx={{
                                mt: 1,
                                width: "315px",
                                height: "50px",
                                display: {md:"flex", justifyContent:"center", alignItems:"center"},
                                }}>
                                <Button variant="container" sx={{width: "320px", height:"33px", backgroundColor:"#FFC107"}} disableElevation>Chọn</Button>
                                </Box>
                            </CardContent>
                        
                        </Card>
                    </Box>
                </Grid>
                <Grid item  md={4} xs={12} sx={{ mt: 1  , display: { xs:"flex !important", justifyContent: "center !important" }}}>
                    <Box >
                        <Card >
                      
                            <CardMedia 
                                component="img" alt="pizza hải sản" height="230px"  image={require("../../assets/images/bacon.jpg")} sx ={{borderRadius: "4px 4px 0 0"}}/>
                            <CardContent sx={{width:"340px"}}>
                                <Box sx={{fontSize: "16px",display: {md:"flex", flexDirection:"column", alignItems:"start"}}}>
                                <Typography variant="body2" sx={{ fontSize:"20px", fontWeight:"400" }}>
                                    CHEESY CHICKEN BACON
                                </Typography>
                                <Typography variant="body2" sx={{mt: 3, fontWeight:"100"}}>
                                    PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓI
                                </Typography>
                                <Typography variant="body2" sx={{mt: 3}}>
                                    Xốt Phô Mai, Thịt Gà, Thịt Heo Muối, Phô Mai Mozzarella, Cà Chua.
                                </Typography>
                                </Box>
                                <Box sx={{
                                mt: 1,
                                width: "315px",
                                height: "50px",
                                display: {md:"flex", justifyContent:"center", alignItems:"center"},
                                }}>
                                <Button variant="container" sx={{width: "320px", height:"33px", backgroundColor:"#FFC107"}} disableElevation>Chọn</Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PizzaType