
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
import { useState } from "react";

function App() {
  
  //Combo Size
    const [ComboSize, setComboSize] = useState(); 
  //Pizza type
    const [pizzaType, setPizzaType] = useState();
  //Drink
    const [chooseDrink, setOptionDrink] = useState(); // state when a drink is selected 
  //Form order
    const [fullName, setFullName] = useState();
    const [Email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAddress] = useState();
    const [voucher, setVoucher] = useState();
    const [message, setMessage] = useState();
  //hàm xử lý khi nút Gửi được ấn 
    const sendData = () => {
      console.log("Hello")
    }
  
  return(
    <div className="App">
      <form>
        <Container maxWidth="lg">
          {/* App bar  */}
          <LinkBar/>
          <CarouselAndHeader/>
            {/* Why pizza 365 */}
            <WhyPizza365/>
            {/* Combo */}
            <ComboMenu 
              //pros State
              prosComboSize = {ComboSize}
              // pros setSate
              prosSetComboSize = {setComboSize}/>
            {/* Pizza type */}
            <PizzaType 
              //pros State
              prosPizzaType = {pizzaType}
              // pros setSate 
              prosSetPizzaType = {setPizzaType}/>
            {/* Drink */}
            <Drink 
              //pros State
              prosDrink= {chooseDrink} 
              // pros setSate
              prosSetDrink = {setOptionDrink}/>
            {/* Form */}
            <OrderForm 
              //pros State
              prosComboSize = {ComboSize}
              prosPizzaType = {pizzaType}
              prosDrink= {chooseDrink}
              prosFullName = {fullName}
              prosEmail = {Email}
              prosPhoneNumber = {phoneNumber}
              prosAddress = {address}
              prosVoucher = {voucher}
              prosMessage = {message}
              // pros setSate
              prosSetFullName = {setFullName}
              prosSetEmail = {setEmail}
              prosSetPhoneNumber = {setPhoneNumber}
              prosSetAddress = {setAddress}
              prosSetVoucher = {setVoucher}
              prosSetMessage = {setMessage}
              proSendData = {sendData}
            />
        </Container>
        {/* Footer */}
        <Footer /> 
      </form>
    </div>
  );
}

export default App;
