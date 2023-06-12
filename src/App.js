import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { NewEmployee } from "./components/NewEmployee";
import { EmployeeList } from "./components/EmployeeList";
import { UpdateEmployee } from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route index element={<EmployeeList />}></Route>
          <Route path="/employeelist" element={<EmployeeList />}></Route>
          <Route path="/addemployee" element={<NewEmployee />}></Route>
          <Route path="/updateemployee/:id" element={<UpdateEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
