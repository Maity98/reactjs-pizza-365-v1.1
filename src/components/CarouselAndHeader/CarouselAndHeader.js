import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Grid } from "@mui/material";
function CarouselAndHeader (){
    return(
        <div>
            <Grid container sx={{mt: 8}}>
                <Grid mg={12} sx={{color:"orange"}}>
                    <h1>Pizza 365</h1>
                    <p style={{ fontStyle: "italic"}}>Truly Italy</p>
                </Grid>
            </Grid>
            {/* Carousel */}
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../../assets/images/1.jpg")}
                    alt="first slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../../assets/images/2.jpg")}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../../assets/images/3.jpg")}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../../assets/images/4.jpg")}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselAndHeader