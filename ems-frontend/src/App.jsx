import "./App.css";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListOfEmployeeComponent from "./component/ListOfEmployeeComponent";
import HelloWorld from "./HelloWorld";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
{/* http://localhost:3002/ */}
          <Route path="/" element={<ListOfEmployeeComponent />} />
{/* http://localhost:3002/employees */}
          <Route path="/employees" element={<ListOfEmployeeComponent />} />
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
