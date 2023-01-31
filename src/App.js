
import { Container } from "@mui/system";
import "bootstrap/dist/css/bootstrap.min.css";
import LinkBar from "./components/LinkBarComponent/NavBar";
import CarouselAndHeader from "./components/CarouselAndHeader/CarouselAndHeader";
import WhyPizza365 from "./components/WhyPizza365/WhyPizza365";
import ComboMenu from "./components/ComboMenu/ComboMenu";
import PizzaType from "./components/PizzaType/PizzaType";
import Drink from "./components/Drink/Drink";
import OrderForm from "./components/OrderForm/OrderForm";
import Footer from "./components/Footer/Footer";


function App() {
  return(
    <div className="App">
      <Container maxWidth="lg">
        {/* App bar  */}
        <LinkBar/>
        <CarouselAndHeader/>
          {/* Why pizza 365 */}
          <WhyPizza365/>
          {/* Combo */}
          <ComboMenu/>
          {/* Pizza type */}
          <PizzaType/>
          {/* Drink */}
          <Drink/>
          {/* Form */}
          <OrderForm/>
      </Container>
      {/* Footer */}
      <Footer/> 
    </div>
  );
}

export default App;
