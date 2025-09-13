import "./App.css";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListOfEmployeeComponent from "./component/ListOfEmployeeComponent";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <>
      <HeaderComponent />
      <ListOfEmployeeComponent />
      <FooterComponent/>
    </>
  );
}

export default App;
