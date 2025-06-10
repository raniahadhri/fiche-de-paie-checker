import EmployeeData from "./data/employee";
import type { Employee } from "./data/employee";
import EmployeeInfo from "./components/EmployeeInfo";
import Alerts from "./components/Alerts";
import './App.css'

function App() {
  const employee: Employee = EmployeeData;

  return (
    <div>
      <h1>Audit de bulletin de paie</h1>
      <div className="app-container">
        <EmployeeInfo employee={employee} />
      </div>
        <Alerts 
          grossSalary={employee.grossSalary} 
          netSalary={employee.netSalary} 
          deductions={employee.deductions} 
        />
    </div>
  );
}

export default App;
