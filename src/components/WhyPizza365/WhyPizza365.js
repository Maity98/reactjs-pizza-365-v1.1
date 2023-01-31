import { Box, Grid } from "@mui/material"


function WhyPizza365(){
    return(
        <Grid container sx={{mt: 6, display:{xs:"flex", alignItems:"center" , flexDirection:"column"}}}>
            <Grid item md={12} xs={12} sx={{mb:3, color: "orange", display: {md: "flex", justifyContent: "center"}}}>         
                <h2 style={{color: "orange", textDecoration:"underline"}}>Tại sao lại PIZZA 365  </h2>
            </Grid>
            <Grid item md={12}  xs={12} >
                <Box sx={{display: {md: "flex", flexDirection:"row" }}}>
                    <Box sx={{
                        width: 300,
                        height:250,
                        backgroundColor: "#FAFAD2"
                    }}>
                    <h4 style={{margin: "25px 30px 10px 30px"}}>Đa dạng</h4>
                    <p style={{margin: "25px 30px 10px 30px"}}>Số lượng pizza đa dạng, có đầy đủ các loại pizza đang hot nhất hiện nay.</p>
                    </Box>
                    <Box sx={{
                        width: 300,
                        height:250,
                        backgroundColor: "#FFFF00"
                    }}>
                    <h4 style={{margin: "25px 30px 10px 30px"}}>Chất lượng</h4>
                    <p style={{margin: "25px 30px 10px 30px"}}>Nguyên liệu 100% rõ nguồn gốc, quy trình chế biến đảm bảo vệ sinh an toàn thực phẩm</p>
                    </Box>
                    <Box sx={{
                        width: 300,
                        height:250,
                        backgroundColor: "#FFA07A"
                    }}>
                    <h4 style={{margin: "25px 30px 10px 30px"}}>Hương vị</h4>
                    <p style={{margin: "25px 30px 10px 30px"}}>Đảm bảo hương vị ngon, độc, lạ mà bạn chỉ có thể trải nghiệm từ Pizza 365.</p>
                    </Box>
                    <Box sx={{
                        width: 300,
                        height:250,
                        backgroundColor: "#FFA500"
                    }}>
                    <h4 style={{margin: "25px 30px 10px 30px"}}>Dịch vụ</h4>
                    <p style={{margin: "25px 30px 10px 30px"}}>Nhận viên thân thiện, nhà hàng hiện đại. Dịch vụ giao hàng nhanh chất lượng, tân tiến.</p>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default WhyPizza365