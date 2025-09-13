import "./App.css";
import EmployeeComponent from "./component/EmployeeComponent";
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
          {/* http://localhost:3002/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent />} />
          {/* http://localhost:3002/edit-employee/1 */}
          <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
          {/* http://localhost:3002/delete-employee/1 */}
          <Route path="/delete-employee/:id" element={<EmployeeComponent />} />
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
