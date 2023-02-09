import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import axios from "axios";
import { useState, useEffect} from "react"
import { useDispatch } from "react-redux";
import { orderDrinkChange } from "../../action/order.action";
function Drink ( {prosDrink, prosSetDrink}){
    //load data drink
    const [drinkCollection, setDrink] = useState(); // state load data drink
    //khai báo dispatch
    const dispatch = useDispatch();
    //Nhận giá trị của state trong giai đoạn mounting 
    //Khai báo cac action
    //function load data drink
    const dataDrink  = async() => {
        await axios({
            method: "get",
            url: "http://203.171.20.210:8080/devcamp-pizza365/drinks"
        })
        .then((res) => { 
            //console.log(res.data);
            setDrink(res.data);
        })   
        .catch((error) => {
            console.error(error)
        })  
    }
    //function thay lưu state của Drink khi drink được select
    const onChangeSelectDrink = (event) => {
        prosSetDrink(event.target.value);
        dispatch(orderDrinkChange(event.target.value))
        //console.log(event.target.value);
        //console.log(prosDrink)
    }
    useEffect(() => {
        dataDrink();  
    }, [])
        // console.log(drinkCollection)
   
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
                        sx={{height:"42px"}}
                        onChange= {onChangeSelectDrink}>
                            <MenuItem></MenuItem>
                            {/* State haven't change after u set to change. It need one re-render to contain the data after fetch, so we will use if else to render once the drink have data */}
                            {drinkCollection  ? drinkCollection.map((element) => {
                                return <MenuItem value={element.maNuocUong} key={element.tenNuocUong} >{element.tenNuocUong}</MenuItem> 
                                })
                             : <MenuItem>Loading</MenuItem>}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default Drink