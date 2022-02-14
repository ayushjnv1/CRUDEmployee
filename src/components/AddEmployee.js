import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../axios_api/bootapi";

const AddEmployee = () => {
    const [employee, setEmployee] = useState();

    const handleForm = (e) => {
        postDataToServer(employee);
        e.preventDefault();
    }
    const postDataToServer = (data) => {
        axios.post(`${base_url}/addEmployee`, data).then(
            (response) => {
                toast.success("done");
                document.getElementById("btn").click();

            },
            (error) => {
                console.log(error);
            }
        );
    }
    return (
        <>
            <h1 className="text-center">Fill Employee Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup  >
                    <label for="name">Employee Name</label>
                    <Input type="text" placeholder="Enter Name " name="name" id="name"
                        onChange={(e) => { setEmployee({ ...employee, name: e.target.value }) }} required
                    />
                </FormGroup>
                <FormGroup>
                    <label for="address">Address</label>
                    <Input
                        type="text"
                        placeholder="Enter Address "
                        name="address"
                        id="address"
                        onChange={(e) => { setEmployee({ ...employee, address: e.target.value }) }} required
                    />
                </FormGroup>
                <FormGroup>
                    <label for="department">Department</label>
                    <Input
                        type="text"
                        placeholder="Enter Department "
                        name="department"
                        id="department"
                        onChange={(e) => { setEmployee({ ...employee, department: e.target.value }) }} required
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success mx-3" type="submit">Add Employee</Button>
                    <Button color="warning" type="reset" id="btn">Clear</Button>
                </Container>

            </Form>
        </>
    );
};
export default AddEmployee;
