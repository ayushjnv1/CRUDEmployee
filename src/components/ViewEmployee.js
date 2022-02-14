import React, { useEffect, useState } from "react";
import { Card, CardBody, CardText } from "reactstrap";
import Employee from "./Employee";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import base_url from "../axios_api/bootapi";

const ViewEmployee = () => {
    const [employee, setEmployee] = useState([
        // { id: "1", name: "ayush", address: "bhilwara", department: "developer" },
    ]);

    function getAllEmpl() {
        axios.get(`${base_url}/getEmployee`).then(
            (response) => {
                // success
                console.log(response);
                setEmployee(response.data);
            },
            (error) => {
                // for error
                console.log(error);
            }
        );
    };
    useEffect(() => {
        getAllEmpl();
    }, []);

    const deleteEmployee = (id) => {
        setEmployee(employee.filter((c) => { return c.empId !== id }));
    }
    const addEmp = () => {
        return Employee.length > 0
            ? employee.map((emp) => <Employee key={emp.empId} emp={emp} update={deleteEmployee} />)
            : "No Employee "
    }
    return (
        <>
            <h2 className="text-center"> All Employees</h2>
            <Card >
                <CardBody style={{ display: "flex", "background-color": " coral" }}>
                    <CardText className="mx-5 my-2   " style={{ "font-weight": "bold", "padding-left": "7ex" }} >ID</CardText>
                    <CardText className="mx-5  my-2" style={{ "font-weight": "bold", "padding-left": "4.5rem" }}>Name</CardText>
                    <CardText className="mx-5 my-2" style={{ "font-weight": "bold", "padding-left": "4.5rem" }}>Address</CardText>
                    <CardText className="mx-5 my-2" style={{ "font-weight": "bold", "padding-left": "4.5rem" }}>Department</CardText>
                </CardBody>
            </Card>
            {addEmp()}
        </>
    );
};
export default ViewEmployee;
