import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployee = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) =>
  axios.post(REST_API_BASE_URL, employee);

export const findEmployeeById = (EmployeeId) => {
  return axios.get(`${REST_API_BASE_URL}/${EmployeeId}`);
};
export const updateEmployee = (employeeId, employee) => {
  return axios.put(`${REST_API_BASE_URL}/${employeeId}`, employee);
};
export const deleteEmployeeById = (employeeId) => {
  return axios.delete(`${REST_API_BASE_URL}/${employeeId}`);
};
