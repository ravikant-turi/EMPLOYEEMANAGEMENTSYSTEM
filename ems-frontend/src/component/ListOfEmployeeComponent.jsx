import React, { useEffect, useState } from "react";
import { listEmployee, deleteEmployeeById } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListOfEmployeeComponent = () => {
  var dummyData = [
    {
      id: "1",
      firstName: "Ravi",
      lastName: "Turi",
      email: "turisklf@gmail.com",
    },
    {
      id: "2",
      firstName: "Neha",
      lastName: "Sharma",
      email: "neha.sharma@example.com",
    },
    {
      id: "3",
      firstName: "Amit",
      lastName: "Kumar",
      email: "amit.kumar@example.com",
    },
    {
      id: "4",
      firstName: "Priya",
      lastName: "Verma",
      email: "priya.verma@example.com",
    },
    {
      id: "5",
      firstName: "Sandeep",
      lastName: "Singh",
      email: "sandeep.singh@example.com",
    },
    {
      id: "6",
      firstName: "Pooja",
      lastName: "Gupta",
      email: "pooja.gupta@example.com",
    },
    {
      id: "7",
      firstName: "Rahul",
      lastName: "Mehta",
      email: "rahul.mehta@example.com",
    },
    {
      id: "8",
      firstName: "Anjali",
      lastName: "Mishra",
      email: "anjali.mishra@example.com",
    },
    {
      id: "9",
      firstName: "Vikas",
      lastName: "Yadav",
      email: "vikas.yadav@example.com",
    },
    {
      id: "10",
      firstName: "Sneha",
      lastName: "Patel",
      email: "sneha.patel@example.com",
    },
  ];

  const [employees, setEmployee] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    listEmployee()
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addnewEmployee() {
    navigator("/add-employee");
  }
  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }
  function deleteEmployee(id) {
    deleteEmployeeById(id)
      .then((response) => {
        console.log(response.data);
        setEmployee((prev) => prev.filter((emp) => emp.id !== id));
        return listEmployee();
      })
      .catch((error) => {
        console.error(error);
      });
    // navigator(`delete-employee/${id}`);
  }
  return (
    <div className="container mt-9">
      <h1 className="text-center mt-2">List Of Employee</h1>
      <hr />
      <button
        type="button"
        className="btn btn-primary mb-1 "
        onClick={addnewEmployee}
      >
        Add Employee
      </button>

      <table className="table table-striped table-bordered table-hover text-center align-middle">
        <thead>
          <tr>
            <th>id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Actions</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfEmployeeComponent;
