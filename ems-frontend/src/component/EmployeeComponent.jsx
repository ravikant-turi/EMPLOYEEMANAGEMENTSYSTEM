import React, { useEffect, useState } from "react";
import {
  createEmployee,
  findEmployeeById,
  updateEmployee,
} from "../services/EmployeeService";

import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (id) {
      findEmployeeById(id)
        .then((response) => {
          console.log("Here we go with:", id, response.data);

          setFirstName(response.data.firstName);
          console.log("first name : ", firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);
  const navigator = useNavigate();

  // function handleFirstName(e) {
  //   setFirstName(e.target.value);
  // }
  // function handleLastName(e) {
  //   setLastName(e.target.value);
  // }
  // function handleEmail(e) {
  //   setEmail(e.target.value);
  // }
  function saveEmployee(e) {
    e.preventDefault();
    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);
      console.log("id : ", id);
      if (id) {
        console.log("we are indside the update");
        updateEmployee(id, employee)
          .then((response) => {
            console.log("updated employee");
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createEmployee(employee).then((response) => {
          console.log(response.data);
          navigator("/employees");
        });
      }
    }
  }
  // function updateEmployee(e) {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     const employee = { firstName, lastName, email };
  //     console.log(employee);

  //     updateEmployee(id)
  //       .then((response) => {
  //         console.log("updated employee");
  //         console.log(response.data);
  //         navigator("/employees");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // }

  function validateForm() {
    let valid = true;

    const errorCopy = { ...errors };

    if (firstName.trim()) {
      errorCopy.firstName = "";
    } else {
      errorCopy.firstName = "firstName is required";
      valid = false;
    }
    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "lastName is required";
      valid = false;
    }
    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "email is required";
      valid = false;
    }

    console.log(errorCopy);
    setErrors(errorCopy);
    console.log(valid);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return (
        <>
          <h2 className="text-center">Update Employee</h2>
        </>
      );
    } else {
      return (
        <>
          <h2 className="text-center">Add Employee</h2>
        </>
      );
    }
  }

  return (
    <div className="container mt-8 mb-6">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}{" "}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="firstName">
                  Enter FirstName
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter the firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="lastName">
                  Enter LastName
                </label>
                <input
                  type="text"
                  id="LastName"
                  placeholder="Enter the LastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="email">
                  Enter email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter the email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={saveEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
