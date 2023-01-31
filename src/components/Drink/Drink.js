import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import axios from "axios";
import { useState, useEffect, useRef} from "react"

function Drink (pros){
    //load data drink
    
   
    useEffect(() => {
        const dataDrink  = async() => {
            const data = await axios({
                method: "get",
                url: "http://203.171.20.210:8080/devcamp-pizza365/drinks"
            })
            .then((res) => {
                pros = res.data    
                console.log(res.data);
            })     
        }
        dataDrink()
    })
    return(
        <Grid container sx={{my: 4}}>
            <Grid item  md={12} sx={{color: "orange", textDecoration:"underline" , display: {md:"flex", justifyContent:"center"}}}>
                <h3>Chọn Đồ Uống</h3>
            </Grid>
            <Grid item  md={12} xs={12} sx={{my: 3}} >
                <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Drink</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Drink"
                        sx={{height:"42px"}}>
                            <MenuItem></MenuItem>
                            {pros.map((element) => {
                                    return    <MenuItem value={element.maNuocUong} key={element.ngayTao}>{element.tenNuocUong}</MenuItem>
                            })}   
                    </Select>
                </FormControl>
            </Grid>
      </Grid>
    )
}

export default Drink