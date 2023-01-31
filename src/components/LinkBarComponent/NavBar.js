import { AppBar, Toolbar, Box, Button } from "@mui/material"

const pages = ['Trang chủ', 'Combo', 'Loại Pizza', 'Gửi đơn hàng'];
function LinkBar (){
    return(
        <AppBar position="fixed" sx={{height: "50px",backgroundColor: "orange"}}>
            <Toolbar   sx={{ minHeight: "50px !important",
             mx:{
              md:"15px",
              xs:"0px"
            }}}>
              <Box sx={{height: "50px !important" , flexGrow: 1, display:{ xs: "flex", justifyContent:"space-between"}}} >
                  {pages.map((page) => (
                    <Button key={page} sx={{ my: 2, color: "black", fontSize:"13px"}}>
                      {page}
                    </Button>
                    ))
                  }
              </Box>
            </Toolbar>
        </AppBar>
    )
}
export default LinkBar